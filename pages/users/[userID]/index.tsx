import {useRouter} from 'next/router'

function ProductDetail(){
    const router =useRouter()
    const userID=router.query.userID
return <h1>Salam alaykom {userID}</h1>
}
export default ProductDetail