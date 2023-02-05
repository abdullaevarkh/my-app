import qwerty from './qwerty.jpg';
import './App.css';

function App() {
  console.log('albina, hello!')
  return (
    <>
    <div className="menu_block_head">
      <div className="menu_block">
        <a href="home" className="menu_links">Home</a>
        <a href="about_me" className="menu_links">About me</a>
        <a href="skills" className="menu_links">Skills</a>
        <a href="portfolio" className="menu_links">Portfolio</a>
        <a href="contacts" className="menu_links">Contacts</a>
      </div>
    </div>
    <div className="menu_block_head">
      <div className="content_block">
        <div className="content_text1">
          <h1 className="denis">Denis</h1>
          <h1 className="denis">Novic</h1>
        </div>
        <div className="content_text2">
          <h2 className="designer">UX | UI designer</h2>
          <h2 className="designer">24 years old, Minsk</h2>
        </div>
        <div className="content_text">
          <div className="rotate">
            <h2 className="ru">RU | ENG</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="content_img">
      <img src={qwerty} alt={"qwerty"}/> 
    </div>
    <div className="menu_block_head3">
      <div className="content_text_th">
        <h4 className="aboutme">About me</h4>
        <div>
          <p>Hi, I'm Denis – UX/UI designer from Minsk. <br/>I'm interested in design and everything connected with it.</p>
          <p>I'm studying at courses "Web and mobile <br/>design interfaces" in IT-Academy.</p>
          <p>Ready to implement excellent projects <br/>with wonderful people.</p>
        </div>
      </div>
    </div>
<div className="menu_block_head4">
  <div>
    <h1>Skills</h1>
  </div>
  <div>
    <h1>I work in such programs as</h1>
  </div>
</div>
    </>
  );
}

export default App;
{/* <h1>Заголовок 1</h1>
<h2>Заголовок 2</h2>
<h3>Заголовок 3</h3>
<h4>Заголовок 4</h4>
<h5>Заголовок 5</h5> */}