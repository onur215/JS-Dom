/* -------------------------------------------------------------------------- */
//!                                  DOM INTRO                                */
/* -------------------------------------------------------------------------- */
// DOM dökümanların stillerinin, yapısının, içeriğinin erişilmesine ve güncellenmesine olanak sağlayan, dilden bağımsız bir arabirimdir.
// DOM HTML Api olark bize bir kod bloğu sunuyor. Bu sayede HTML, CSS e JS ile erişip manipule edebiliyorum.
// HTML ve CSS ile statik değişiklikler yapabiliyor, ama JS ile dinamiklik sağlıyor.

// HTML DOM API (Application Programming Interface), web sayfalarındaki HTML ve XML belgelerini programlama dilleri (genellikle JavaScript) aracılığıyla dinamik olarak manipüle etmenizi sağlayan bir dizi yöntem ve özellikler topluluğudur.

// Bu API, HTML belgelerini ve belgelerdeki elementleri temsil eden bir nesne modeline erişim sağlar ve bu modelde değişiklikler yapmanıza olanak tanır.

//?DOM elemenlarının hepsi Object haline gelir.
//? Bu sayede Tüm HTML elemanlarının propertylerini  - lenght
//? Bu sayede Tüm HTML elemanlarının metodlarını 
//? Bu sayede Tüm HTML elemanlarının olayları alabilirsiniz.


/* -------------------------------------------------------------------------- */
//!                           Belgeye Erişim Yöntemleri                       */
/* -------------------------------------------------------------------------- */
// document.getElementById(id): Belirtilen id'ye sahip olan ilk elemente erişir.
// document.getElementsByClassName(className): Belirtilen sınıfa (class) sahip tüm elementleri bir HTMLCollection olarak döner.
// document.getElementsByTagName(tagName): Belirtilen etiket adına sahip tüm elementleri bir HTMLCollection olarak döner.
// document.querySelector(selector): Belirtilen CSS seçicisine (selector) uyan ilk elemente erişir.
// document.querySelectorAll(selector): Belirtilen CSS seçicisine (selector) uyan tüm elementleri bir NodeList olarak döner.

//*===========================================
//*            GETELEMENTBYID()
//*===========================================