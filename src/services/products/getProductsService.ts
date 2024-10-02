"use server";

export const getProductsService = async ({
  token,
  companyId,
  branchId,
  name,
}: {
  token: string;
  companyId: string;
  branchId?: string;
  name?: string;
}) => {
  try {
    if (!token) {
      throw new Error("No token provided");
    }

    const queryParams = new URLSearchParams();

    if (companyId) {
      queryParams.append("companyId", companyId);
    }

    if (branchId) {
      queryParams.append("branchId", branchId);
    }

    if (name) {
      queryParams.append("name", name);
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products?${queryParams.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};