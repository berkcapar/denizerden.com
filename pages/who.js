import React from 'react'
import Layout from '../components/Layout'

const Who = () => {
  return (
    <Layout>
      <div className="bioall">
      <div className="firsparagraph">
        <p className="biotextfirst">
          Deniz Erden, 10 yaşında Konservatuvar eğitimine 2003’te yarı zamanlı,
          2004’te ise tam zamanlı olarak Anadolu Üniversitesi Devlet
          Konservatuarı’nda piyanist Robert Farkas ile başladı. Lisans eğitimine
          Mimar Sinan Güzel Sanatlar Üniversitesi Devlet Konservatuvarı’nda
          Prof. Hülya Tarcan ile devam etti. Bu süreçte Doç.Elif Şahin-Nesweda
          ve Prof. Cornelis Witthoefft ile Stuttgart Musikhochschule’de çalışma
          şansı yakaladı.
          <br />{' '}
          <p>
            2018’de yüksek lisans eğitimini Mimar Sinan Güzel Sanatlar
            Üniversitesi Devlet Konservatuvarı’nda 20. yüzyıl müziği üzerine
            Prof. Hülya Tarcan ve Doç Ayça Aytuğ ile araştırmalar yaptı.
            Ardından Opera bölümünde korrepetitörlük görev yaptı.Besteciliği
            üniversitede yaptığı emprovizasyonlarla keşfetti ve yarattığı özgür
            dünyasında ambient stilde, piyano için kompozisyonlar üretmeye
            başladı.{' '}
          </p>
        </p>
        <img
          className="deniz1"
          alt="deniz erden"
          src="images/400x400.jpg"
        ></img>
      </div>
      <div className="secondparagraph">
        <p className="biotextsecond">
          2018’de Bahçeşehir Üniversitesi Elektronik Müzik Prodüksüyonu
          sertifika programını tamamladı ve soundscape alanında çalışmalara
          yöneldi. İlk olarak İstanbul Soundscape Project kapsamında düzenlenen
          “Haydarpaşa’da bir Gar” adlı projede sesini duyurma şansı yakaladı.
          Ağustos ayında ise kendi projesi “Your Planet Calling” ile hem
          çevresel farkındalık yaratımına hem de doğanın korunmasına katkı
          sağladı.
          <br />{' '}
          <p className="paragraph4">
            {' '}
            Her iki alanda da çalışmalarına devam eden Deniz, 2018’in Şubat
            ayında Hideki Kozakura’nın “Barcelona Duo” eserinin Türkiye
            prömiyerinin ardından, 2019’daTokyo ve Nagoya’da, Türk ve Japon
            çağdaş bestecilerinin eserlerinin yer aldığı ve Haruyuki Suzuki’nin
            “Ringlet” eserinin dünya prömiyerini gerçekleştirdiği iki solo
            resital gerçekleştirdi.{' '}
          </p>
          <br />{' '}
          <p className="ensemble">Ayrıca Ensemble Flâneur’ün üyesidir. </p>
        </p>
        <img className="deniz3" alt="deniz erden" src="images/deniz3.jpg"></img>
      </div>
      </div>
      <style jsx>
        {`
          .bioall {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            height: 1200px;
            margin-top: 30px;
            margin-left: 180px;
            margin-right: 180px;
            width: auto;
            color: white;
          }
          .bioall div + div {
            margin-left: 50px;
          }
          .firstparagraph {
            margin-left: 50px;
            margin-bottom: 0px;
          }
          .secondparagraph {
            justify-content: center;
            align-items: flex-start;
          }
          .paragraph4 {
            margin-bottom: 0;
          }
          .ensemble {
            margin-top: 0;
          }
        `}
      </style>
    </Layout>
  )
}

export default Who
