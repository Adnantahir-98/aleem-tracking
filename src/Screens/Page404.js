import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const Page404 = () => {
    return (
        <div>
            <Container style={{height:'79vh'}}>
                <h1 className='text-center text-danger p-5'>Error 404 Page not found, Please go <Link to="/">back</Link></h1>
            </Container>
        </div>
    )
}

export default Page404