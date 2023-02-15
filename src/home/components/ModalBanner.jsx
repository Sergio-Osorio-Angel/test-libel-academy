const ModalBanner = ({ showModal = false, onShowModal }) => {
    const closeModal = () => {
        onShowModal();
    }
    window.onclick = function (event) {
        if (event.target == document.querySelector('.modal-banner')) {
            onShowModal();
        }
    }
    return (
        <div className={`modal-banner ${showModal ? "active-modal" : ''}`}>
            <div className="containter-modal-banner">
                <button type="button" onClick={closeModal}>X</button>
                <img src="/assets/720x420.png" alt="Imagen modal" />
            </div>
        </div>
    );
}

export default ModalBanner;