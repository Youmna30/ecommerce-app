import BreadCrumb from "@/app/_components/SpecificProduct/BreadCrumb";
import ProductDetails from "@/app/_components/SpecificProduct/ProductDetails";
import ThumbnailSlider from "@/app/_components/SpecificProduct/ThumbnailSlider";
import { getProductById } from "@/services/product.service";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const myparams = await params;
  const productId = myparams.id;
  const product = await getProductById(productId);
  //check if product is null toast an error something wrong happened
  // then continue if not null to send this dataa
  const { images, title, subcategory, category } = product!;

  return (
    <div className="container mx-auto px-4">
      <BreadCrumb
        title={title!}
        subcategories={subcategory}
        category={category}
      />
      <div className="flex flex-col lg:flex-row gap-8 py-6">
        <ThumbnailSlider images={images} />
        <ProductDetails product={product!} />
      </div>
    </div>
  );
};

export default page;
