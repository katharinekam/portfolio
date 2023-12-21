import './header.scss';

const Header = () => {
    return (
      <section className="header">
        <div className="mobile">
          <h1 className="first-name">
            KATHARINE <br /> KAM
          </h1>

          <div className="line"></div>
          <p className="greeting">Hello ! Welcome to my webpage !</p>
        </div>

        <div className="desktop">
            <div className="upper">
                <div className="title-font">
                <h1 className="junior-dev">
                    Junior <br /> Software <br /> Developer
                </h1>
                <p>
                Junior Software Engineer who equipped skills from SkillsCity Bootcamp. I’m based in Manchester.

                </p>
                </div>

                <div className="background-graph-line">
                    <div className="line_1"></div>
                    <div className="line_2"></div>
                    <div className="line_3"></div>
                    <div className="line_4"></div>
                </div>
          </div>

            <div className="lower">
                <h1 className="first-name">
                    KATHARINE <br /> KAM
                </h1>
            </div>
        </div>
      </section>
    );
}


export default Header;