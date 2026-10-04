import { redirect } from "next/navigation";
import { getProductById } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import styles from "./page.module.css";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) {
    return {
      title: "Product Not Found | DFQ Solar",
    };
  }
  return {
    title: `${product.name} | DFQ Solar`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    // Redirect to home if product doesn't exist
    redirect("/?error=product-not-found");
  }

  return (
    <div className={styles.appContainer}>
      <Navbar activeTab="products" />
      <main className={styles.mainContent}>
        <section className={styles.productSection}>
          <div className="container">
            <Link href="/?tab=products" className={styles.backLink}>
              <ArrowLeft size={16} /> Back to Catalog
            </Link>

            <div className={styles.productLayout}>
              {/* Left Column: Product Details */}
              <div className={styles.productDetails}>
                <h1 className={styles.productName}>{product.name}</h1>
                <p className={styles.productDescription}>{product.description}</p>
                
                <div className={styles.productImageWrapper}>
                  <Image
                    src={product.primaryImage}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                
                <div className={styles.specsContainer}>
                  <h3 className={styles.specsTitle}>Technical Specifications</h3>
                  <div className={styles.specsGrid}>
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className={styles.specItem}>
                        <div className={styles.specHeader}>
                          <span className={styles.specKey}>{spec.key}</span>
                          <span className={styles.specValue}>{spec.value}</span>
                        </div>
                        <span className={styles.specBenefit}>{spec.benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Lead Form */}
              <div className={styles.leadFormSidebar}>
                <div className={styles.stickyWrapper}>
                  <LeadCaptureForm productName={product.name} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
