import './App.css'

function App() {

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Tobey's blog</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#section1">關於我</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#section2">求學經歷</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#section3">工作技能</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#section4">音樂作品</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#section5">視訊作品</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#section6">圖片作品</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#section7">更多資訊</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <aside>
          <blockquote>
            <h3>吉伊卡哇小貼士</h3>
            <p>吉伊卡哇和小八生日的日期都是5/1。</p>
          </blockquote>
        </aside>

        <header>
          <div id="section1_p"><p>在此部落格中，將分享我在工作上及生活中的點滴</p></div>
        </header>

        <div className="main_container">
          {/* 個人介紹 */}
          <article id="section1">
            <section>
              <table cellspacing="20">
                <tr>
                  <td><img className="img_self" src="img/self.png" alt="Tobey's picture" /></td>
                  <td><h1 className="section1_content">吳函蓁</h1><p>
                    <em className="section1_content"><strong><a className="link" href="https://www.ntue.edu.tw/">國立台北教育大學</a></strong>數位科技設計系大二</em>
                  </p>
                  </td>
                </tr>
              </table>
            </section>
            <section className="section1_intro">
              <p>我是一位熱愛學習與創新的多媒體創作者，專注於透過<mark>影像</mark>、<mark>動畫</mark>及<mark>互動設計</mark>傳遞溫暖與力量。目前致力於「無家者送愛平台」的發展，結合技術與設計，幫助需要支持的群體，實現社會影響力。此外，我也熟悉網站設計與應用程式開發，正在學習使用工具如DaVinci Resolve、Animate.css等。相信每個創意都能成為改變的契機，持續為公益與創意結合的未來努力。</p>
            </section>
            <hr className="line" />
          </article>

          {/* 求學經歷介紹 */}
          <article id="section2">
            <header>
              <h2>求學經歷</h2>
            </header>
            <section className="section_intro">
              <table>
                <thead>
                  <tr>
                    <th>Dates</th>
                    <th>Work</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2020-2023</td>
                    <td>國立彰化女子高級中學</td>
                  </tr>
                  <tr>
                    <td>2023-2024</td>
                    <td>國立台北教育大學數位科技設計學系</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <hr className="line" />
          </article>

          {/* 技能介紹 */}
          <article id="section3">
            <header>
              <h2>工作技能</h2>
            </header>
            <div className="section_intro">
              <table>
                <tr>
                  <td>Python</td>
                  <td>⭐</td>
                </tr>
                <tr>
                  <td>Java</td>
                  <td>⭐⭐</td>
                </tr>
                <tr>
                  <td>C++</td>
                  <td>⭐⭐⭐</td>
                </tr>
              </table>
            </div>
            <hr className="line" />
          </article>

          {/* 音樂作品介紹 */}
          <article id="section4">
            <h2>音訊介紹</h2>
            <div className="section_intro">
              <audio controls>
                <source src="audio/Between Two Chairs.mp3" type="audio/mpeg" />
              </audio>
            </div>
            <hr className="line" />
          </article>

          {/* 視訊作品介紹 */}
          <article id="section5">
            <h2>視訊介紹</h2>
            <div className="section_intro video">
              <iframe width="300" height="168" src="https://www.youtube.com/embed/u08AVG-9CAU?si=Gq8Q4iNQi8e5S8Wg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe width="300" height="168" src="https://www.youtube.com/embed/m1_yrlLXRcg?si=aDa11R3rqoEB4-_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <hr className="line" />
          </article>

          {/* 圖片作品介紹 */}
          <article id="section6">
            <h2>校園照片集</h2>
            <div className="section_intro school_pic">
              <figure className="aPic_area">
                <img className="pic" src="img/school1.jpg" alt="創意館風景" />
                <figcaption>運動會時的創意館</figcaption>
              </figure>
              <figure className="aPic_area">
                <img className="pic" src="img/school2.jpg" alt="夜晚的校園" />
                <figcaption>夜晚的校園</figcaption>
              </figure>
            </div>
            <hr className="line" />
          </article>

          {/* 嵌入pdf文件 */}
          <article id="section7">
            <h2>更多資訊</h2>
            <div className="section_intro">
              <embed className="pdf" src="pdf/大二注意事項.pdf" />
            </div>
            <hr className="line" />
          </article>

          {/* 互動元素 */}
          <details className="section_intro">
            <summary>點擊查看提示</summary>
            <p>晚睡晚起身體好。</p>
          </details>
          <hr className="line" />

          {/* 加入地圖 */}
          <iframe
            className="section_intro map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.2784017805598!2d121.54463740000004!3d25.0246244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a908a8232611%3A0xeebfb2d71a5025c7!2z5ZyL56uL6Ie65YyX5pWZ6IKy5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1732462718419!5m2!1szh-TW!2stw"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <hr className="line" />

          <footer className="section_intro">
            <p>聯絡我們：s111219005@stu.ntue.edu.tw</p>
            <time datetime="2024-11-24">最後更新日期：2024年11月24日</time>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App