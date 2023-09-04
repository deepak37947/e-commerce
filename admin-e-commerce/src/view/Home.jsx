import React, { useEffect, useState } from 'react'
import AxiosClient from '../webservices/getWay'
import { WebUrls } from '../webservices/urls'

const Home = () => {

  const [productData, setProductData] = useState()

  const product = async () => {

    let response = await AxiosClient.get(WebUrls.productList)
   if(response.status===200){
    setProductData(response.data)
   }

  }
  useEffect(() => {
    product()
  }, [])
  console.log(productData);
  return (
    <>
      <h1>Hn bhai ma login hpo gaya </h1>
      <div className='row'>
          <main className='mt-4'>
            <div className="container-fluid bg-trasparent my-4 p-3" style={{ "position": "relative" }}>
              <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                <div className="col">
                {productData && productData.map((item, index) => <div className="card h-100 shadow-sm" key={index}>
                    <img src={`data:image/png;base64,${item?.prod_image}`} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="clearfix mb-3">
                        <span className="float-start badge rounded-pill bg-primary">{item?.prod_name}</span>
                        <span className="float-end price-hp">{item?.prod_price}</span>
                      </div>
                      <h5 className="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                      <div className="text-center my-4">
                        <a href="#" className="btn btn-warning">Check offer</a>
                      </div>
                    </div>
                  </div>)}
                </div>
              </div>
            </div>
          </main>
        </div>

    </>
  )
}

export default Home
