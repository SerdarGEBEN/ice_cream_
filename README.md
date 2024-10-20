# Kütüphaneler

- 1) json-server json-server --watch db.json --port 4060 belirle ve çalıştır
  bootstrap
- 2) axios@^0.27.2 test icin axios bu sürümü kurulmalı npm install 'axios@^0.27.2'
     @testing-library/user-event@14.0
- 3) !!! usereventin import elle yazılmalı otomatik import hatalı yapıyor!

# uniTest

- Oluşturulan her dinamik nesnenin test leri kendi klasörünün içerisinde dizinlenmiştir.

# Selector - Seçiciler

- Test içerisnde JSX elementlerini çağırmaya yarayan methodlardır

screen nesnesi aracılığı ile kullanılır

- byrole: elementin rolüne göre o elemnti çağırmak için,

- bylabelText : inputu bağlı olduğu labele göre çağırır,

- byplacsholdertext: inputu placeholderına göre çağırır,

- bytext: herheangi bir elementi yazı içeriğine göre çağırır(içinde ... olan elementi getir.)

- bydisplayvalue: elementi value değerine göre çağırır,

- byalttext: resimleri alt niteliğine göre çağırır,

- bytitle: elementleri title özelliğine göre çağırır,

- bytestid: elementler data-testid sine göre çağırır. diğerleri ile seçilemezse enson noktada kullanılır

# //! Seçiciler !//

- 1)Method Tipi | 2) All İfadesi | 3) Seçici Method

- get > render anında DOM'da olan elementleri almak için kullanılır | elementi bulamazsa test başarısız olur

- query > elementin ekranda olma durumu keisn değilse kullanılır get ile benzer çalışır | elementi bulamazsa null döndürür test devam eder

- find > elemetin ekrana basılamasının asenkron olduğu durumlarda kullanılır. (api isteği sonnucu ekrana basılıcaksa)

- not: find methodu promise döndürdüğü için async await ile kullanılmalı

- eğer seçici methoda all ifadesi eklersek seçici koşula uyan bütün elemanları getirir.

- not: all kullanırsa dönen cevapta 1 eleman olsa dahi dizi döner

# HTML Element Rolleri

- her html elementinin kendini temsil eden bir rolü vardır. Bu rol ismi bazen etiket ismi ile aynı (button 'ın rolü button) bazen de farklı(h1 'in rolü heading) olabilir.

<https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles> dökümantasyona sitesinden bakılabilir

# Matchers - Kontrolcüler

- expect komutu ile birlikte kullanılan ve bir element veya değişken üzerindeki beklenetimizi kontrol edene methodlardır.

- örn: (rengi kırmızıdır | checkbox tiklidir | buton aktiftir | yazı içeriği şudur | dizinin uzunluğu 5 tir)

- Değişkenler için kullanılan matcher'lar:

- --<https://jestjs.io/docs/using-matchers>
  HTML elementi için kullanılan matcher'lar:

- --<https://github.com/testing-library/jest-dom>

  # Test Geliştirme Süreci

# TDD (Test Driven Development)

- Önce testler yazılır sonra işlevler/bileşenler kodlanır
  red to green
- Artısı, testler bir yük olarka gelmez.Test yazmak, geliştirme sürecinin bir parçası oluyor. Testleri yazarken dinamik yapının bir algoritmasını oluşturduğumuz için işlevi daha hızlı kodlayabiliyoruz

# BDD (Behaviour Driven Development)

- Önce işlev/bileşen kodlanır sonra testleri yazılır.
- FireEvent
- rtl içerisinde gelen olay tetiklemek için kullandığımız method.
- Gerçek kullanıcıdan uzak tepkiler verdiği için yerini UserEvent'e bıraktı.
- Tetiklenen olaylar gerçek bir insanın tepkisinden çok daha hızlı bir şekilde aniden gerçekleştiği için testlerde tutarsızlıklara ve beklenmedik sonuçlara sebep olabiliyor

# UserEvent

- fireEvent'in modern / gelişmiş versiyonu
- tetiklediğimiz olaylar fireEvent gibi doğrudab tetiklenmesis yeribe gerçek bir kullanıcıyı simüle ederek belirli bir gecikmenin ardından tetiklenir
- Kullanılması için userEvent kütüphanesi kurulmalıdır
- async çalıştığı için async await ile kullanılır

# Mock

- Unit testlerde "mock" kullanımı, bir fonksiyonun veya nesnenin belirli bir kısmını izole ederek test etmeye yarar. Özellikle dış bağımlılıkları olan fonksiyonları test etmek için kullanılır. Bu sayede gerçek sistem bileşenlerine bağımlı olmadan sadece test edilmek istenen kodun doğru çalışıp çalışmadığı kontrol edilir.

- Dışa Bağımlılıkları izole ederiz

- Fonksiyonlar çağrıldı mı kontrolü ypamamızı sağlar

- Fonksiyonlara gönderilen parametreleri kontrol edebilir
# ice_cream_
