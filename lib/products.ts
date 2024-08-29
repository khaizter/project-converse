import puppeteer from "puppeteer";

export const getProducts = async () => {
  console.log("Scraping converse products...");
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://www.converse.ph/men/shoes.html");

  await page.setViewport({ width: 1080, height: 1024 });

  await page.waitForSelector(
    ".ais-InfiniteHits-list > .ais-InfiniteHits-item",
    { timeout: 5_000 }
  );

  const products = await page.$$(
    ".ais-InfiniteHits-list > .ais-InfiniteHits-item"
  );

  console.log("RAWPRODUCTS:", products);

  // throw new Error("Failed to fetch products");

  let allProducts: Array<Product> = [];
  for (const product of products) {
    try {
      const name: string | null = await page.evaluate(
        (el) => el?.querySelector(".result-title")?.textContent || null,
        product
      );

      const rawPrice = await page.evaluate(
        (el) => el?.querySelector(".after_special")?.textContent,
        product
      );

      const price = rawPrice || "failed to fetch price";

      const image: string | null = await page.evaluate(
        (el) =>
          el?.querySelector(".product-item-photo")?.getAttribute("src") || null,
        product
      );

      allProducts.push({ name, price, image });
    } catch (err) {
      throw err;
    }
  }
  await browser.close();
  return allProducts;
};

export const getProduct = async (productId: string | number) => {
  return {
    productName: "dummy-product-" + productId.toString(),
    price: 100,
    image: "dummy-image.png",
  };
};
