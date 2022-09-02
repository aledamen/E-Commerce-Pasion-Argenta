import Carousel from 'react-bootstrap/Carousel'

function Carousels() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.afashop.com.ar/file/v6827801149259370283/general/3161786_2430262%20-%20CAM_WHS_AR_FED_AFA_HOME_SS22_AFA%20Shop_KV%2002_Home%20Banner%20Desktop_1899x488px.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.afashop.com.ar/file/v4100745612483979226/general/3161666_2430262%20-%20CAM_WHS_AR_FED_AFA_HOME_SS22_AFA%20Shop_KV%2001_Home%20Banner%20Desktop_1899x488px.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.afashop.com.ar/file/v1621169637035489188/general/3337367_2554140%20-%20CAM_WHS_AR_AFA_AWAY_R1_FW22_Home%20Banner%20Desktop_1899x488px_02.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.afashop.com.ar/file/v8640034206014132755/general/3337255_2554140%20-%20CAM_WHS_AR_AFA_AWAY_R1_FW22_Home%20Banner%20Desktop_1899x488px_01.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Carousels
