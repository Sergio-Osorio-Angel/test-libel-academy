import { useState } from "react";
import ModalBanner from "./ModalBanner";


const Banner = () => {

    const [showModal, setShowModal] = useState(false);

    const onShowModal = () => {
        setShowModal(!showModal);
    }

    return (
        <>
            <div className="banner-primary">
                <div className="info-banner">
                    <h1 className="tl-banner">Big Comeback</h1>
                    <p className="txt-banner">Nullam porta, eros id aliquam pulvinar, urna ex mattis eros, quis vestibulum urna turpis et risus. Mauris porttitor risus faucibus, auctor arcu a, tincidunt nibh...</p>
                    <div className="btn-info-banner">
                        <button className="btn-blue">Watch now</button>
                        <button className="btn-white">+ Playlist</button>
                    </div>
                </div>
                <button type="button" onClick={onShowModal} className="btn-play">
                    <img src="/assets/icon-play.png" alt="Play button" />
                </button>
            </div>
            <ModalBanner showModal={showModal} onShowModal={onShowModal}/>
        </>
    );
}

export default Banner;