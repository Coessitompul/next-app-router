import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: 'Air Jordan 1 Low',
    price: 1729000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/AIR+FORCE+1+%2707.png",
  },
  {
    id: 2,
    title: 'Air Jordan 1 Low',
    price: 1729000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/32b0f17a-38ba-40fa-9de7-31c5bb1661e3/AIR+JORDAN+1+LOW.png",
  },
  {
    id: 3,
    title: 'Air Jordan 1 Mid',
    price: 1909000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/89b9c5f5-9049-422d-aa76-19ea5323ef58/WMNS+AIR+JORDAN+1+MID.png",
  },
  {
    id: 4,
    title: 'Air Jordan 1 Mid',
    price: 1909000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/89b9c5f5-9049-422d-aa76-19ea5323ef58/WMNS+AIR+JORDAN+1+MID.png",
  },

]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id");
  
  if(id) {
    const detailProduct = data.find((item) => item.id === Number(id))
    if(detailProduct) {
      return NextResponse.json({ status: 200, message: "Success", data: detailProduct });
    }

    return NextResponse.json({ status: 404, message: "Not Found", data: [] });
  }


  return NextResponse.json({ status: 200, message: "Success", data: data });
}