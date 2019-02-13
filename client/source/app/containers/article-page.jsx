import React from 'react';
import { Redirect } from 'react-router-dom';
import { Header, Button, Responsive } from 'semantic-ui-react';
import ReactHtmlParser from 'react-html-parser';
import { getSomeVideos, getAllVideos } from '../utils/youtube-utils';
import ArticleCard from '../components/article-card';
import ArticleCardBig from '../components/article-card-big';
import MainArticles from './main-articles';
import ProductCardSmall from '../components/product-card-small';
import Avatar from '../assets/images/avatarPlaceholder.png';
import ExpertInfo from './expert-info';
import Advice from '../components/advice';
import ExpertMovies from './expert-movies';
import ExpertArticles from './expert-articles';
import ArticlePlaceholder from '../assets/images/article-placeholder.png';
import ProductCarousel from './product-carousel';

class VideoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allArticles: [],
      expertVideos: [],
      expertArticles: [],
      title: '',
      content: '',
      allProducts: [],
      noArticle: false
    };

    this.resolveDescription = this.resolveDescription.bind(this);
    this.shareFacebook = this.shareFacebook.bind(this);
    this.shareTwitter = this.shareTwitter.bind(this);
  }

  async componentDidMount() {
    const allObject = await getAllVideos('UUlYlNvdBOuwuQZrCle9BrcA');

    const all = [];

    allObject.forEach((element) => {
      if (element.snippet.title.indexOf('Wanda Baltaza') !== -1) {
        all.push(element);
      }
    });

    const products = [{ link: '1050,daktarin-krem-15-g.html', name: 'Daktarin krem 15 g', price: '20,16', thumbnail: '/img/product/1050/kind/1' },
      { link: '21180,4-flex-30-saszetki-kolagen-nowej-generacji-witamina-c.html', name: '4 Flex 30 sasz.-zdrowe kości ,stawy,ścięgna', price: '77,70', thumbnail: '/img/product/21180/kind/1' },
      { link: '28063,4-lacti-20-kaps.html', name: '4 lacti 20 kaps.', price: '8,84', thumbnail: '/img/product/28063/kind/1' },
      { link: '42622,acai-berry-strong-90-tabletek.html', name: 'Acai Berry strong 90 tabletek', price: '24,99', thumbnail: '/img/product/42622/kind/1' },
      { link: '1050,daktarin-krem-15-g.html', name: 'Daktarin krem 15 g', price: '20,16', thumbnail: '/img/product/1050/kind/1' },
      { link: '21180,4-flex-30-saszetki-kolagen-nowej-generacji-witamina-c.html', name: '4 Flex 30 sasz.-zdrowe kości ,stawy,ścięgna', price: '77,70', thumbnail: '/img/product/21180/kind/1' },
      { link: '28063,4-lacti-20-kaps.html', name: '4 lacti 20 kaps.', price: '8,84', thumbnail: '/img/product/28063/kind/1' },
      { link: '42622,acai-berry-strong-90-tabletek.html', name: 'Acai Berry strong 90 tabletek', price: '24,99', thumbnail: '/img/product/42622/kind/1' }];

    const html = '<p>Przeziębienie to wywołana przez wirusy infekcja górnych dróg oddechowych, obejmująca nos, gardło i zatoki. Mnogość wirusów, które przyczyniają się do rozwoju przeziębienia, sprawia, że nie jest możliwe stworzenie szczepionki chroniącej nas przed infekcją i jej powikłaniami, także dlatego choroba dotyka nas nawet kilka razy do roku. Zakażenia przenoszone są drogą kropelkową i bardzo szybko się rozprzestrzeniają. Najbardziej narażone są na nie dzieci, które mogą chorować nawet trzy razy częściej niż osoby dorosłe. Natomiast seniorzy, ze względy na to, że ich pamięć immunologiczna jest najlepiej rozwinięta, walczą z przeziębieniem zdecydowanie rzadziej.&nbsp;</p><h3><span style="font-weight: normal;">Jak zwalczyć objawy przeziębienia</span></h3><p>Przeziębienie, wiąże się z szeregiem nieprzyjemnych, dobrze znanych każdemu, objawów:</p><ul><li>zmęczenie, apatia, które pojawiają się już na początku choroby,</li><li>kichanie, i rozpulchnienie błony śluzowej nosa,</li><li>katar, który początkowo jest przeźroczysty, a z czasem z powodu zwiększania się liczby leukocytów w wydzielinie, gęstnieje i staje się żółtawy lub zielonkawy,</li><li>drapanie w gardle,</li><li>suchość błon śluzowych gardła i nosa,</li><li>chrypka i ból gardła,</li><li>kaszel suchy lub mokry,&nbsp;</li><li>stan podgorączkowy lub gorączka.</li></ul><p>Jak zatem wygląda leczenie przeziębienia? Przede wszystkim powinno polegać ono na kilkudniowym odpoczynku, odpowiednim nawodnieniu i sięganiu po preparaty zwalczające objawy oraz wspomagające układ immunologiczny do walki z infekcją. Niewątpliwie symptomy związane z przeziębieniem są na tyle nieprzyjemne, że szukamy szybkich rozwiązań, które postawią nas na nogi i zwalczą wszystkie objawy choroby. Czy jednak taki skuteczny sposób na przeziębienie naprawdę istnieje?</p><h3><span style="font-weight: normal;">Skuteczne leczenie przeziębienia</span></h3><p>Przebieg przeziębienia, mimo że jest podobny u wszystkich, to wymaga indywidualnego podejścia, ponieważ powinniśmy wybierać lek pod kątem własnych objawów, a nie koniecznie tego, co okazało się skuteczne w przypadku np. kolegi z pracy. Dlatego, gdy przychodzimy do apteki po coś na przeziębienie, farmaceuta chce dowiedzieć się, co dokładnie nam dolega. Dobranie leczenia do konkretnych objawów daje bowiem największą skuteczność terapii. Co to oznacza? Oto kilka przykładów:</p><ul><li>Kichamy, leje się nam z nosa, czujemy się osłabieni, mamy gorączkę i ból głowy – w takim wypadku można sięgnąć po wieloskładnikowy lek na przeziębienie w saszetkach lub tabletkach, jak np.&nbsp; <a href="https://www.allecco.pl/14896,coldrex-maxgrip-smak-cytrynowy-10-sasz.html" cmsextlink="https://www.allecco.pl/14896,coldrex-maxgrip-smak-cytrynowy-10-sasz.html" target="_blank">Coldrex MaxGrip</a>&nbsp;czy <a href="https://www.allecco.pl/26698,theraflu-extragrip-14-sasz.html" cmsextlink="https://www.allecco.pl/26698,theraflu-extragrip-14-sasz.html" target="_blank">Theraflu ExtraGrip</a>.</li><li>Oprócz wymienionych wyżej objawów pojawia się również kaszel, wtedy w przypadku kaszlu suchego można zastosować leki na przeziębienie zawierające substancję przeciwkaszlową, jak np. <a href="https://www.allecco.pl/1441,gripex-24-tabletek-powlekanych.html" cmsextlink="https://www.allecco.pl/1441,gripex-24-tabletek-powlekanych.html" target="_blank">Gripex</a>. Kiedy natomiast infekcji towarzyszy kaszel mokry, wybierajmy środki, które ułatwią ewakuację wydzieliny zalegającej w drogach oddechowych, np. <a href="https://www.allecco.pl/28995,vicks-symptomed-complete-smak-cytrynowy-10-saszetek-do-sporzadzenia-roztworu-przeziebienie-grypa.html" cmsextlink="https://www.allecco.pl/28995,vicks-symptomed-complete-smak-cytrynowy-10-saszetek-do-sporzadzenia-roztworu-przeziebienie-grypa.html" target="_blank">Vicks Symptomed Complete</a>.</li><li>Razem z katarem pojawia się ból zatok lub ewentualnie ból gardła, w takim wypadku zamiast preparatu na przeziębienie, zawierającego paracetamol, który jest pozbawiony działania przeciwzapalnego, lepiej wybrać taki na bazie kwasu acetylosalicylowego, jak np. <a href="https://www.allecco.pl/43807,polopiryna-complex-8-saszetek-z-proszkiem-do-sporzadzenie-rotworu.html" cmsextlink="https://www.allecco.pl/43807,polopiryna-complex-8-saszetek-z-proszkiem-do-sporzadzenie-rotworu.html" target="_blank">Polopiryna Complex</a>&nbsp;lub <a href="https://www.allecco.pl/21505,aspirin-bayer-complex-10-sasz.html" cmsextlink="https://www.allecco.pl/21505,aspirin-bayer-complex-10-sasz.html" target="_blank">Aspirin Complex</a>. Substancja ta oprócz efektu przeciwbólowego, przeciwzapalnego oraz przeciwgorączkowego, daje również działanie napotne, co jest szczególnie ważne na noc i pozwoli się nam lepiej wygrzać.</li></ul><p>Bardzo popularne wśród pacjentów <a href="https://www.allecco.pl/filter/category,135,preparaty-wieloskladnikowe" cmsextlink="https://www.allecco.pl/filter/category,135,preparaty-wieloskladnikowe" target="_blank">wieloskładnikowe preparaty na przeziębienie</a>&nbsp;nie są jednak przeznaczone do stosowania dla wszystkich. W zależności od zawartych w produkcie składników, ostrożność powinny zachować osoby chore na nadciśnienie oraz zaburzenia rytmu serca, młodzież poniżej 12., a nawet 16. roku życia, jak w przypadku kwasu acetylosalicylowego, a także chorzy na astmę, zaćmę czy padaczkę. W razie wątpliwości zawsze warto zasięgnąć porady lekarza lub farmaceuty w tej kwestii.</p><h3><span style="font-weight: normal;">Przeziębienie – leczenie uzupełniające</span></h3><p>Zawsze można sięgnąć również po preparaty łagodzące pojedyncze objawy przeziębienia, takie jak:</p><ul><li>krople lub tabletki na <a href="https://www.allecco.pl/filter/category,45,katar" cmsextlink="https://www.allecco.pl/filter/category,45,katar" target="_blank">katar</a>,&nbsp;</li><li>tabletki do ssania oraz inne preparaty na <a href="https://www.allecco.pl/filter/category,42,bol-gardla" cmsextlink="https://www.allecco.pl/filter/category,42,bol-gardla" target="_blank">bolące gardło</a>,&nbsp;</li><li><a href="https://www.allecco.pl/filter/category,43,goraczka" cmsextlink="https://www.allecco.pl/filter/category,43,goraczka" target="_blank">leki przeciwgorączkowe</a>,&nbsp;</li><li>syropy i tabletki <a href="https://www.allecco.pl/filter/category,44,kaszel" cmsextlink="https://www.allecco.pl/filter/category,44,kaszel" target="_blank">na kaszel</a>,&nbsp;</li><li>tabletki oraz inne preparaty <a href="https://www.allecco.pl/filter/category,219,zatoki" cmsextlink="https://www.allecco.pl/filter/category,219,zatoki" target="_blank">na zatoki</a>.&nbsp;</li></ul><p>Leczenie objawów przeziębienia to oczywiście bardzo ważny aspekt, jednak pozostaje jeszcze zwalczanie przyczyny infekcji (czyli wirusa) oraz wspomaganie układu odpornościowego podczas choroby. Obecnie dostępne są na rynku bez recepty leki o działaniu przeciwwirusowym, np. <a href="https://www.allecco.pl/3892,groprinosin-500-mg-50-tabl.html" cmsextlink="https://www.allecco.pl/3892,groprinosin-500-mg-50-tabl.html" target="_blank">Gropronosin</a>, który zarówno zwalcza przyczynę choroby, jak i wspomaga układ immunologiczny podczas walki z infekcją. Warto w czasie choroby uzupełniać leczenie za pomocą ziół na przeziębienie, które stanowią naturalne wsparcie dla fizjologicznych mechanizmów obronnych organizmu, np. na bazie ekstraktu z bzu czarnego - <a href="https://www.allecco.pl/30274,sambucol-extra-strong-syrop-120-ml-audiobook.html" cmsextlink="https://www.allecco.pl/30274,sambucol-extra-strong-syrop-120-ml-audiobook.html" target="_blank">Sambucol Extra Strong</a>&nbsp;lub zawierający ekstrakt z pelargonii afrykańskiej – <a href="https://www.allecco.pl/37823,pelavo-multi-6-syrop-120-ml.html" cmsextlink="https://www.allecco.pl/37823,pelavo-multi-6-syrop-120-ml.html" target="_blank">Pelavo Multi</a>.&nbsp;</p><p>Więcej informacji o wspieraniu odporności w okresie jesienno – zimowym można znaleźć w artykułach:</p><ul><li><a href="https://www.allecco.pl/czytelnia/artykul/128,naturalne-sposoby-wzmacniania-odpornosci" cmsextlink="https://www.allecco.pl/czytelnia/artykul/128,naturalne-sposoby-wzmacniania-odpornosci" target="_blank">Naturalne sposoby wzmacniania odporności</a>,&nbsp;</li><li><a href="https://www.allecco.pl/czytelnia/artykul/121,jak-wybrac-preparat-na-wzmocnienie-odpornosci-u-doroslych" cmsextlink="https://www.allecco.pl/czytelnia/artykul/121,jak-wybrac-preparat-na-wzmocnienie-odpornosci-u-doroslych" target="_blank">Jak wybrać preparat na wzmocnienie odporności u dorosłych?</a></li></ul><h3><span style="font-weight: normal;">Przeziębienie w ciąży, czyli preparat dla przyszłej mamy</span></h3><p>Kobiety ciężarne to szczególna grupa pacjentek, które po pierwsze są bardzo podatne na infekcje, ze względu na obniżoną odporność w tym szczególnym okresie oraz niemożność zastosowania wielu popularnych leków łagodzących objawy choroby. Przyszłe mamy mogą oczywiście posiłkować się domowymi sposobami na przeziębienie, jak picie syropu z cebuli czy herbaty z sokiem malinowym.&nbsp;</p><p>Co jednak zastosować na uciążliwy katar w ciąży? Wskazane jest w tym czasie sięganie po preparaty oczyszczające i nawilżające błonę śluzową nosa, czyli popularną wodę morską, np. <a href="https://www.allecco.pl/32057,prenalen-katar-spary-do-nosa-20ml.html" cmsextlink="https://www.allecco.pl/32057,prenalen-katar-spary-do-nosa-20ml.html" target="_blank">Prenalen Katar</a>, a także nebulizację z wykorzystaniem soli fizjologicznej. Na pozostałe objawy choroby oraz wsparcie odporności można zastosować <a href="https://www.allecco.pl/13617,prenalen-syrop-115-ml.html" cmsextlink="https://www.allecco.pl/13617,prenalen-syrop-115-ml.html" target="_blank">syrop na przeziębienie z linii produktów Prenalen</a>, <a href="https://www.allecco.pl/37614,prenalen-smak-malinowy-14-saszetek-do-sporzadzenia-zawiesiny.html" cmsextlink="https://www.allecco.pl/37614,prenalen-smak-malinowy-14-saszetek-do-sporzadzenia-zawiesiny.html" target="_blank">saszetki</a>&nbsp;oraz <a href="https://www.allecco.pl/30580,prenalen-gardlo-z-malina-i-propolisem-16-pastylki-przeziebienie-dla-kobiet-w-ciazy.html" cmsextlink="https://www.allecco.pl/30580,prenalen-gardlo-z-malina-i-propolisem-16-pastylki-przeziebienie-dla-kobiet-w-ciazy.html" target="_blank">tabletki na gardło na bazie propolisu</a>.&nbsp;</p><p>Przeziębienie przytrafia się nam dość często, warto zatem znaleźć skuteczny sposób na walkę z jego objawami. Zawsze starajmy się wyleczyć infekcję do końca, aby nie tylko uniknąć jej nawrotu, ale także groźnych dla zdrowia powikłań. Nie zapominajmy też o wspieraniu układu odpornościowego w okresie kiedy jesteśmy szczególnie narażeni na&nbsp; zakażenia.&nbsp;</p><p><i>Autor: mgr farm. Karina Szmyd</i></p>';

    const articles = [{ link: '/blog/1', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', thumbnails: '' },
      { link: '/blog/2', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', thumbnails: '' },
      { link: '/blog/3', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet.', thumbnails: '' },
      { link: '/blog/4', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', thumbnails: '' },
      { link: '/blog/5', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', thumbnails: '' },
      { link: '/blog/6', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet, consectetur.', thumbnails: '' }];

    this.setState({ allProducts: products, allArticles: articles, expertVideos: all, expertArticles: articles, expert: 'Wanda Baltaza', title: 'Jak wybrać najlepszy lek na przeziębienie, który zwalczy uciążliwe dolegliwości? Ekspert allecco.pl podpowiada, czym kierować się przy kupnie preparatu łagodzącego pierwsze objawy choroby.', content: html });
  }

  shareFacebook() {
    const facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href, 'facebook-popup', 'height=350,width=600');
    if (facebookWindow.focus) { facebookWindow.focus(); }
    return false;
  }

  shareTwitter() {
    const twitterWindow = window.open('https://twitter.com/share?url=' + window.location.href, 'twitter-popup', 'height=350,width=600');
    if (twitterWindow.focus) { twitterWindow.focus(); }
    return false;
  }

  resolveDescription() {
    const tmp = [];
    this.state.content.forEach((element) => {
      if (element.type === 'title') {
        tmp.push(<Header size='huge' >{element.text}</Header>);
      } else if (element.type === 'paragraph') {
        tmp.push(<div className='paragraph' >{element.text}</div>);
      }
    });
    return tmp;
  }

  render() {
    const redirect = this.state.noArticle ? <Redirect to="/blog"/> : <div></div>;
    return (
      <div className='mainContainer' >
        {redirect}
        <div className='blueStripe' ></div>
        <div className='videoPageContainer' >
          <div className='main' >
            <ArticleCardBig image={ArticlePlaceholder} />
            <div className='title' >
              <Header className='articleTitle' >{this.state.title}</Header>
                <div className='buttons' >
                  <Button className='facebook' onClick={this.shareFacebook} icon='facebook' />
                </div>
            </div>
            <div className='description' >
              {ReactHtmlParser(this.state.content)}
            </div>
          </div>
          <Responsive minWidth='1021' >
            <div className='sidePanel' >
              <div className='center' >
                <div className='redLine' ><div className='leftDot'/><div className='rightDot'/></div>
                <Header>OSTATNIE ARTYKUŁY</Header>
                <div className='lastAM' >
                  {this.state.allArticles.slice(0, 2).map(article => <ArticleCard id='1' image={ArticlePlaceholder} article={article} />)}
                </div>
              </div>
              <div className='articleProductsContainer' >
                <div className='redLine' ><div className='leftDot'/><div className='rightDot'/></div>
                <Header className='articleHeader' >PRODUKTY Z ARTYKUŁU</Header>
                <div className='articleProducts' >
                  {this.state.allProducts.slice(0, 4).map(product => <ProductCardSmall contentClass='content' product={product} />)}
                </div>
              </div>
            </div>
          </Responsive>
        </div>
        <Responsive style={{ clear: 'both', marginBottom: '30px' }} maxWidth='1020' >
          <div className='whiteContainer doctorInfo' >
            <div className='background whiteHundred' />
            <div className='redLine' ><div className='leftDot'/><div className='rightDot'/></div>
            <Header className='mentionedProducts productHeader' textAlign='center' size='huge' >Produkty z artykułu</Header>
            <div className='articleProductsSmall' >
              {this.state.allProducts.slice(0, 4).map(product => <ProductCardSmall contentClass='content' product={product} />)}
            </div>
          </div>
        </Responsive>
        <ExpertInfo avatar={Avatar} expert={this.state.expert} />
        <Advice />
        <ExpertMovies expertVideos={this.state.expertVideos} />
        <ExpertArticles expertArticles={this.state.expertArticles} placeholder={ArticlePlaceholder} />
        <Responsive maxWidth='1020' >
          <MainArticles />
        </Responsive>
        <ProductCarousel />
      </div>
    );
  }
}

export default VideoPage;
