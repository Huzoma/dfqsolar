# 0001. Interactive Product Detail Views

**Date**: 2026-10-04
**Status**: Proposed

## Summary

The product catalog cards will become clickable links to dedicated product detail pages. Each detail page will display rich technical specifications and a sticky lead capture form that wires directly to WhatsApp. This approach provides users with the in-depth information needed to make purchasing decisions while keeping the conversion friction low by reusing the existing WhatsApp workflow.

## Context

Currently, the landing page shows a product catalog with basic information, but users cannot view detailed specifications. To drive informed inquiries, we need dedicated product views that provide deeper technical details. The chosen approach leverages a static JSON data model for products, aligning with our Tracer Bullet methodology to deliver end-to-end value quickly without the overhead of a full database migration. 

## Requirements

**User stories**:
- As a potential buyer, I want to click on a product to see detailed specifications so that I can determine if it fits my energy needs.
- As a potential buyer, I want to quickly inquire about a specific product via WhatsApp so that I can get a quote or place an order easily.

**Acceptance criteria**:
- **AC-1**: Users can click on a product card in the catalog to navigate to `/product/[id]`.
- **AC-2**: The product detail page displays the product name, description, primary image, and a list of detailed specifications (key/value pairs).
- **AC-3**: A lead capture form is present on the product detail page, collecting Full Name, Phone Number (WhatsApp), and an optional message.
- **AC-4**: Submitting the lead form opens a pre-filled WhatsApp message containing the product name and user details.
- **AC-5**: Navigating to an invalid product ID redirects the user back to the catalog/home page with a subtle toast message.
- **AC-6**: The product detail page has a basic dynamic title (`<Product Name> | DFQ Solar`).

## Options considered

### Option 1: Static JSON Data Source (Recommended)
Store product data in a static TypeScript/JSON file (`src/data/products.ts`).

**Pros**:
- Extremely fast to implement and deploy.
- Zero infrastructure or database dependencies.

**Cons**:
- Requires a code deployment to update product information.

### Option 2: Database-backed Product Catalog
Introduce a database table (e.g., PostgreSQL/Prisma) for products.

**Pros**:
- Allows dynamic updates without code deployments.
- Ready for a future admin panel.

**Cons**:
- Overhead of setting up a database, ORM, and schema migrations.
- Slows down initial feature delivery unnecessarily.

## Decision

**Chosen option**: Option 1: Static JSON Data Source

We will store product data in a static TypeScript file (`src/data/products.ts`) to align with the Tracer Bullet approach, providing rapid end-to-end functionality without infrastructure overhead.

## Rationale

A static JSON data source is the most appropriate choice for this stage. It directly aligns with the Tracer Bullet approach outlined in the project context, prioritizing end-to-end functionality over premature scaling. Since the product catalog is relatively small and changes infrequently at this stage, the overhead of introducing a database is unjustified. We can easily migrate this static data to a database when the Admin Dashboard (Feature 8) is built in a later slice.

## Feature design

**Data model sketch**:
Static JSON entity `Product`:
- `id` (string, required): Unique identifier
- `name` (string, required): Product name
- `description` (string, required): Short overview
- `primaryImage` (string, required): Path to image asset
- `specs` (array of objects, required): Array of `{ key: string, value: string }` pairs

**State transitions**:
None.

**API surface**:
| Endpoint | Method | Key inputs | Key outputs | Auth | Key errors |
|---|---|---|---|---|---|
| `/product/[id]` | GET | `id` (path param) | HTML page | Public | Invalid ID -> Redirect |
| WhatsApp URL | N/A | `fullName`, `phone`, `message`, `productName` | Deep link | Public | N/A |

**Value sourcing**:
| Action | Value produced / displayed | Source |
|---|---|---|
| Load product page | Product name, description, specs, image | Looked up in `src/data/products.ts` by `id` |
| Load product page | Page title | Derived from `Product.name` |
| Form submit | Pre-filled WhatsApp message | Derived from form inputs and `Product.name` |
| Invalid ID handled | Redirect to catalog | Router logic when `id` not found in `products.ts` |

**Key invariants**:
- Every product catalog card must link to a valid `id` in `products.ts`.
- The lead form requires at least a Name and Phone Number to construct the WhatsApp link.

**Security model**:
All product data is public. No authentication is required to view products or initiate a WhatsApp chat.

**Configuration required**:
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: Existing environment variable, reused for the lead form destination.

**Critical test scenarios**:
- Happy path: User clicks product, views details, fills form, and clicks submit to open WhatsApp (verifies **AC-1**, **AC-2**, **AC-3**, **AC-4**, **AC-6**).
- Failure case: User navigates to `/product/does-not-exist` and is redirected to the home page with a toast (verifies **AC-5**).
- Validation: User submits form without providing a name or phone number and sees validation errors (verifies **AC-3**).

## Build plan

1. Define the `Product` type and create `src/data/products.ts` with static product data, satisfies **AC-2**.
2. Update the existing product catalog cards to use `next/link` navigating to `/product/[id]`, satisfies **AC-1**.
3. Create the `app/product/[id]/page.tsx` dynamic route with basic SEO title and layout, satisfies **AC-2**, **AC-6**.
4. Implement the invalid ID redirect logic in the dynamic route, satisfies **AC-5**.
5. Build the sticky lead capture form component with validation (Zod) and WhatsApp deep link construction, satisfies **AC-3**, **AC-4**.
6. Assemble the final two-column layout (product image/specs on left, lead form on right) using CSS Modules, satisfies **AC-2**, **AC-3**.

## Consequences

**Positive**:
- Users get detailed product information, improving lead quality.
- Zero infrastructure overhead, keeping deployment and maintenance simple.

**Negative / tradeoffs**:
- Updating product details or pricing requires a developer to edit `products.ts` and deploy.

**Neutral**:
- The UI pattern sets a foundation for future e-commerce capabilities.

## Follow-up

- [ ] Revisit the data source (migrate to a database) when designing the Admin Dashboard (Feature 8) in Slice 4.
