import "./style/about.css";


function About() {
    return (
        <div id="aboutpage" className="container col-sm-6 mt-4 pt-3">
            <h3 className="py-3 text-white">API Bilgileri</h3>
            <ul className="list-group">
            <li className="list-group-item">https://breakingbadapi.com/ adresinden Breaking Bad dizisiyle ilgili gerekli datalar fetch ile alınmış ve proje oluşturulmuştur.</li>
            </ul>
            <h3 className="py-3 text-white">Proje Bilgileri</h3>
            <ul className="list-group pb-4">
                <li className="list-group-item">Proje javascript, react, react-router-dom, bootstrap ve css kullanılarak tasarlanmıştır.</li>
                <li className="list-group-item">Proje, anasayfada tüm içerikleri kısaca barındıran (hakkında, karakterler, alıntılar) ve karakter aramayı sağlayan bir componente sahip olacak şekilde, single page olarak tasarlanmıştır. </li>
                <li className="list-group-item">Characters sayfasında, 40 adet oyuncunun ismi listelenmiş ve bu sayfadan karakterlerin detaylı bilgilerine ulaşılabilecek bir sayfaya yönlendirme yapılmıştır.</li>
                <li className="list-group-item">Arama işlemlerinin sonuçlarının yönlendirildiği bir arama sayfası tasarlanmıştır. </li>
                <li className="list-group-item">Alıntı sayfasında oyunculara ait alıntılar bulunmaktadır. </li>
            </ul>
                
        </div>
    )
}

export default About