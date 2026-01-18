import styles from "./Header.module.css";
import { NavLink } from "react-router";

export function Header() {
  return (
    <div id="v3" className="v3-header">
      <m-header className="m-header js-header" data-header-menu="main">
        <div className="m-header__inner js-header-nav">
          <div className="m-header__logo">
            <NavLink to="/" title="Ir al inicio" data-link="header-logo">
              <img
                src="https://assets.cabifil.es/images/logos_cabify/lo_cabify_primary.svg"
                alt="Logo de Cabify"
              />
            </NavLink>
          </div>

          <nav className="m-header__main">
            <h3 className={`t-title-3 ${styles.headerTitle}`}>e-learning</h3>
          </nav>

          <nav className="m-header__aside">
            <ul className="m-header__nav --secondary">
              <li>
                <div
                  className="m-header__nav__trigger js-header-nav-trigger GTM-header-nav-item"
                  data-header-menu="login"
                >
                  Inicia sesión
                </div>
              </li>

              <li>
                <button
                  className="e-cta --primary --s js-header-nav-trigger GTM-header-nav-item"
                  data-header-menu="sign-up"
                >
                  Regístrate
                </button>
              </li>

              <li>
                <button
                  className="e-cta --outline --s js-header-nav-trigger GTM-header-nav-item"
                  data-header-menu="language"
                >
                  <i className="e-icon --flag-co --xs"></i>
                  CO
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="m-header__popover js-header-popover">
          <div className="m-header__popover__arrow js-header-arrow">
            <i className="e-icon --l --play" aria-hidden="true"></i>
          </div>

          <div className="m-header__popover__actions">
            <div className="m-header__popover__logo js-header-popover-logo">
              <a
                href="https://cabify.com/co"
                title="Ir al inicio"
                data-link="header-logo"
              >
                <img
                  src="https://assets.cabifil.es/images/logos_cabify/lo_cabify_primary.svg"
                  alt="Logo de Cabify"
                />
              </a>
            </div>

            <button
              className="m-header__popover__back e-cta --s --tertiary js-header-popover-back js-header-nav-trigger GTM-header-nav-item"
              data-header-menu="main"
            >
              <i className="e-icon --direction_left_md"></i>
              Atrás
            </button>

            <button
              className="e-bounded --xl --rounded js-header-close"
              aria-label="Cerrar menú"
            >
              <i className="e-icon --s --close_md" aria-hidden="true"></i>
            </button>
          </div>

          <div
            className="m-header__popover__inner js-header-nav-menu"
            data-header-menu="main"
          >
            <nav className="m-header__popover__section js-header-popover-section">
              <ul className="m-header__popover__menu --l">
                <li>
                  <button
                    className="m-header__popover__link js-header-nav-trigger GTM-header-nav-item"
                    data-header-menu="drivers"
                  >
                    Conductores
                    <i
                      className="e-icon --s --direction_right_md"
                      aria-hidden="true"
                    ></i>
                  </button>
                </li>

                <li>
                  <button
                    className="m-header__popover__link js-header-nav-trigger GTM-header-nav-item"
                    data-header-menu="companies"
                  >
                    Empresas
                    <i
                      className="e-icon --s --direction_right_md"
                      aria-hidden="true"
                    ></i>
                  </button>
                </li>

                <li>
                  <button
                    className="m-header__popover__link js-header-nav-trigger GTM-header-nav-item"
                    data-header-menu="passengers"
                  >
                    Pasajeros
                    <i
                      className="e-icon --s --direction_right_md"
                      aria-hidden="true"
                    ></i>
                  </button>
                </li>

                <li>
                  <button
                    className="m-header__popover__link js-header-nav-trigger GTM-header-nav-item"
                    data-header-menu="ads"
                  >
                    Ads
                    <i
                      className="e-icon --s --direction_right_md"
                      aria-hidden="true"
                    ></i>
                  </button>
                </li>

                <li>
                  <button
                    className="m-header__popover__link js-header-nav-trigger GTM-header-nav-item"
                    data-header-menu="about-us"
                  >
                    Nosotros
                    <i
                      className="e-icon --s --direction_right_md"
                      aria-hidden="true"
                    ></i>
                  </button>
                </li>

                <li>
                  <button
                    className="m-header__popover__link js-header-nav-trigger GTM-header-nav-item"
                    data-header-menu="support"
                  >
                    Ayuda
                    <i
                      className="e-icon --s --direction_right_md"
                      aria-hidden="true"
                    ></i>
                  </button>
                </li>
              </ul>
            </nav>

            <nav className="m-header__popover__section js-header-popover-section">
              <ul className="m-header__popover__menu --l">
                <li>
                  <button
                    className="m-header__popover__link js-header-nav-trigger GTM-header-nav-item"
                    data-header-menu="language"
                  >
                    <i className="e-icon --flag-co --xs"></i>
                    CO
                    <i
                      className="e-icon --s --direction_right_md"
                      aria-hidden="true"
                    ></i>
                  </button>
                </li>
              </ul>
            </nav>

            <nav className="m-header__popover__section js-header-popover-section">
              <ul className="m-header__popover__menu --l">
                <li>
                  <button
                    className="m-header__popover__link js-header-nav-trigger GTM-header-nav-item"
                    data-header-menu="login"
                  >
                    Inicia sesión
                    <i
                      className="e-icon --s --direction_right_md"
                      aria-hidden="true"
                    ></i>
                  </button>
                </li>

                <li>
                  <button
                    className="m-header__popover__link js-header-nav-trigger GTM-header-nav-item"
                    data-header-menu="sign-up"
                  >
                    Regístrate
                    <i
                      className="e-icon --s --direction_right_md"
                      aria-hidden="true"
                    ></i>
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div
            className="m-header__popover__inner --hidden js-header-nav-menu"
            data-header-menu="drivers"
            aria-hidden="true"
          >
            <nav className="m-header__popover__section js-header-popover-section">
              <div className="m-header__popover__title e-heading --3xs">
                Conducir
              </div>

              <ul className="m-header__popover__menu --l">
                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/conductores"
                  >
                    Inicio
                  </a>
                </li>
              </ul>

              <div className="m-header__popover__pill --l js-header-popover-pill"></div>
            </nav>

            <nav className="m-header__popover__section js-header-popover-section">
              <div className="m-header__popover__title e-heading --3xs">
                Otros
              </div>

              <ul className="m-header__popover__menu">
                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/conductores/seguridad"
                  >
                    Seguridad
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/conductores/accesibilidad"
                  >
                    Accesibilidad
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/conductores/principios-eticos"
                  >
                    Principios éticos
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabifydriver.zendesk.com/hc/es"
                  >
                    Centro de ayuda conductores
                  </a>
                </li>
              </ul>

              <div className="m-header__popover__pill js-header-popover-pill"></div>
            </nav>

            <nav className="m-header__popover__section js-header-popover-section">
              <div className="m-header__popover__title e-heading --3xs">
                Logística
              </div>

              <ul className="m-header__popover__menu --l">
                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabifylogistics.com/co/conductores"
                    target="_blank"
                  >
                    Cabify Logistics
                    <i className="e-icon --xs --blank" title="--blank"></i>
                  </a>
                </li>
              </ul>

              <div className="m-header__popover__pill --l js-header-popover-pill"></div>
            </nav>

            <aside className="m-header__popover__section">
              <div className="m-header__popover__aside">
                <div className="e-image --radius-m --ratio-16-9">
                  <img
                    src="/static/header/header-pasajeros-banner.png"
                    alt="Nuestro equipo"
                  />
                </div>

                <p className="e-text">
                  Únete a nuestro equipo y ayúdanos a transformar la movilidad
                  urbana
                </p>

                <div>
                  <a
                    className="e-cta --tertiary --laptop:s"
                    data-link="header-extra-tertiary"
                    rel="nofollow noreferrer noopener"
                    data-nosnippet
                    href="https://driver.cabify.com/onboarding?lp_source=co-conductores-menu"
                  >
                    Regístrate
                    <i className="e-icon --direction_right_md --laptop:s"></i>
                  </a>
                </div>
              </div>
            </aside>
          </div>

          <div
            className="m-header__popover__inner --hidden js-header-nav-menu"
            data-header-menu="companies"
            aria-hidden="true"
          >
            <nav className="m-header__popover__section --l js-header-popover-section">
              <div className="m-header__popover__title e-heading --3xs">
                Cabify para empresas
              </div>

              <ul className="m-header__popover__menu --l">
                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/empresas"
                  >
                    Inicio
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/empresas/soluciones"
                  >
                    Soluciones
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/empresas/recursos"
                  >
                    Recursos
                  </a>
                </li>
              </ul>

              <ul className="m-header__popover__menu --l">
                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/empresas/plataforma"
                  >
                    Plataforma
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/empresas/contactanos"
                  >
                    Contacta con ventas
                  </a>
                </li>
              </ul>

              <div className="m-header__popover__pill --l js-header-popover-pill"></div>
            </nav>

            <nav className="m-header__popover__section js-header-popover-section">
              <div className="m-header__popover__title e-heading --3xs">
                Logística
              </div>

              <ul className="m-header__popover__menu --l">
                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabifylogistics.com/co/empresas"
                    target="_blank"
                  >
                    Cabify Logistics
                    <i className="e-icon --xs --blank" title="--blank"></i>
                  </a>
                </li>
              </ul>

              <div className="m-header__popover__pill --l js-header-popover-pill"></div>
            </nav>

            <nav className="m-header__popover__section js-header-popover-section">
              <div className="m-header__popover__title e-heading --3xs">
                Otros
              </div>

              <ul className="m-header__popover__menu">
                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/empresas/seguridad"
                  >
                    Seguridad
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabifyempresas.zendesk.com/hc/es"
                  >
                    Centro de ayuda empresas
                  </a>
                </li>
              </ul>

              <div className="m-header__popover__pill js-header-popover-pill"></div>
            </nav>
          </div>

          <div
            className="m-header__popover__inner --hidden js-header-nav-menu"
            data-header-menu="passengers"
            aria-hidden="true"
          >
            <nav className="m-header__popover__section js-header-popover-section">
              <div className="m-header__popover__title e-heading --3xs">
                Viaja
              </div>

              <ul className="m-header__popover__menu --l">
                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/pasajeros"
                  >
                    Viaja en Cabify
                  </a>
                </li>
              </ul>

              <div className="m-header__popover__pill --l js-header-popover-pill"></div>
            </nav>

            <nav className="m-header__popover__section js-header-popover-section">
              <div className="m-header__popover__title e-heading --3xs">
                Envia
              </div>

              <ul className="m-header__popover__menu --l">
                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/pasajeros/envios"
                  >
                    Envía en Cabify
                  </a>
                </li>
              </ul>

              <div className="m-header__popover__pill --l js-header-popover-pill"></div>
            </nav>

            <nav className="m-header__popover__section js-header-popover-section">
              <div className="m-header__popover__title e-heading --3xs">
                Otros
              </div>

              <ul className="m-header__popover__menu">
                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/tarifas"
                  >
                    Tarifas
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/pasajeros/seguridad"
                  >
                    Seguridad
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/pasajeros/accesibilidad"
                  >
                    Accesibilidad
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/pasajeros/principios-eticos"
                  >
                    Principios éticos
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://help.cabify.com/hc/es"
                  >
                    Centro de ayuda pasajeros
                  </a>
                </li>
              </ul>

              <div className="m-header__popover__pill js-header-popover-pill"></div>
            </nav>

            <aside className="m-header__popover__section">
              <div className="m-header__popover__aside">
                <div className="e-image --radius-m --ratio-16-9">
                  <img
                    src="https://storage.googleapis.com/cabify-production-marketing-design/global/temp/web/test/index-banner-cabifyclub.jpg"
                    alt="Descubre Cabify Club"
                  />
                </div>

                <p className="e-text">
                  Con Cabify Club, moverte te da más. Obtén beneficios
                  increíbles solo por tener la app.
                </p>

                <div>
                  <a
                    className="e-cta --tertiary --laptop:s"
                    data-link="header-extra-tertiary"
                    href="/co/pasajeros/cabify-club"
                  >
                    Descubre Cabify Club
                    <i className="e-icon --direction_right_md --laptop:s"></i>
                  </a>
                </div>
              </div>
            </aside>
          </div>

          <div
            className="m-header__popover__inner --hidden js-header-nav-menu"
            data-header-menu="ads"
            aria-hidden="true"
          >
            <nav className="m-header__popover__section --l js-header-popover-section">
              <div className="m-header__popover__title e-heading --3xs">
                Cabify Ads
              </div>

              <ul className="m-header__popover__menu --l">
                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/ads"
                  >
                    Inicio
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/ads/online"
                  >
                    Online
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="/_LOCALE/ads/offline"
                  >
                    Offline
                  </a>
                </li>
              </ul>

              <ul className="m-header__popover__menu --l">
                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/media/contacto"
                  >
                    Contacto
                  </a>
                </li>
              </ul>

              <div className="m-header__popover__pill --l js-header-popover-pill"></div>
            </nav>
          </div>

          <div
            className="m-header__popover__inner --hidden js-header-nav-menu"
            data-header-menu="about-us"
            aria-hidden="true"
          >
            <nav className="m-header__popover__section js-header-popover-section">
              <div className="m-header__popover__title e-heading --3xs">
                Nosotros
              </div>

              <ul className="m-header__popover__menu --l">
                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/sobre-nosotros"
                  >
                    Sobre nosotros
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/conoce-nuestra-marca"
                  >
                    Nuestra marca
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/blog/"
                  >
                    Blog
                  </a>
                </li>
              </ul>

              <div className="m-header__popover__pill --l js-header-popover-pill"></div>
            </nav>

            <nav className="m-header__popover__section js-header-popover-section">
              <div className="m-header__popover__title e-heading --3xs">
                Impacto
              </div>

              <ul className="m-header__popover__menu --l">
                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/neutros-en-carbono"
                  >
                    Neutros en carbono
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/sostenibilidad"
                  >
                    Sostenibilidad
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/pasajeros/accesibilidad"
                  >
                    Accesibilidad
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/horizonte"
                  >
                    Horizonte
                  </a>
                </li>
              </ul>

              <div className="m-header__popover__pill --l js-header-popover-pill"></div>
            </nav>

            <nav className="m-header__popover__section js-header-popover-section">
              <div className="m-header__popover__title e-heading --3xs">
                Talento y Cultura
              </div>

              <ul className="m-header__popover__menu --l">
                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.careers/es/"
                  >
                    Únete al equipo
                  </a>
                </li>
              </ul>

              <div className="m-header__popover__pill --l js-header-popover-pill"></div>
            </nav>

            <nav className="m-header__popover__section js-header-popover-section">
              <div className="m-header__popover__title e-heading --3xs">
                Recursos
              </div>

              <ul className="m-header__popover__menu">
                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/tarifas"
                  >
                    Tarifas
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/co/prensa"
                  >
                    Prensa
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    rel="nofollow noreferrer noopener"
                    data-nosnippet
                    href="https://brand.cabify.com"
                  >
                    Portal de Marca
                  </a>
                </li>
              </ul>

              <div className="m-header__popover__pill js-header-popover-pill"></div>
            </nav>
          </div>

          <div
            className="m-header__popover__inner --hidden js-header-nav-menu"
            data-header-menu="support"
            aria-hidden="true"
          >
            <nav className="m-header__popover__section --l js-header-popover-section">
              <div className="m-header__popover__title e-heading --3xs">
                Centros de ayuda
              </div>

              <ul className="m-header__popover__menu --l">
                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://help.cabify.com/"
                  >
                    Pasajeros
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabifyempresas.zendesk.com/hc/es"
                  >
                    Empresas
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://logistics-cabify.zendesk.com/hc/es"
                  >
                    Logística
                  </a>
                </li>
              </ul>

              <ul className="m-header__popover__menu --l">
                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabifypartners.zendesk.com/hc/es"
                  >
                    Flotas
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link"
                    data-link="header-list"
                    href="https://cabifydriver.zendesk.com/hc/es"
                  >
                    Conductores
                  </a>
                </li>
              </ul>

              <div className="m-header__popover__pill --l js-header-popover-pill"></div>
            </nav>
          </div>

          <div
            className="m-header__popover__inner --hidden js-header-nav-menu"
            data-header-menu="login"
            aria-hidden="true"
          >
            <nav className="m-header__popover__section js-header-popover-section">
              <ul className="m-header__popover__menu">
                <li>
                  <a
                    className="m-header__popover__link --illustration js-header-popover-link"
                    data-link="header-list"
                    rel="nofollow noreferrer noopener"
                    data-nosnippet
                    href="https://driver.cabify.com/driver/onboarding/"
                  >
                    <div className="e-image --radius-m">
                      <img
                        src="/static/header/illustration-login-conductor.svg"
                        alt="Conductor"
                      />
                    </div>
                    Inicia sesión como conductor
                  </a>
                </li>
              </ul>

              <div className="m-header__popover__pill js-header-popover-pill"></div>
            </nav>

            <nav className="m-header__popover__section js-header-popover-section">
              <ul className="m-header__popover__menu">
                <li>
                  <a
                    className="m-header__popover__link --illustration js-header-popover-link"
                    data-link="header-list"
                    href="https://cabify.com/app"
                  >
                    <div className="e-image --radius-m">
                      <img
                        src="/static/header/illustration-login-empresa.svg"
                        alt="Empresa"
                      />
                    </div>
                    Inicia sesión como empresa
                  </a>
                </li>
              </ul>

              <div className="m-header__popover__pill js-header-popover-pill"></div>
            </nav>
          </div>

          <div
            className="m-header__popover__inner --hidden js-header-nav-menu"
            data-header-menu="sign-up"
            aria-hidden="true"
          >
            <nav className="m-header__popover__section js-header-popover-section">
              <ul className="m-header__popover__menu">
                <li>
                  <a
                    className="m-header__popover__link --illustration js-header-popover-link"
                    data-link="header-list"
                    rel="nofollow noreferrer noopener"
                    data-nosnippet
                    href="https://driver.cabify.com/onboarding?lang=es&country=colombia"
                  >
                    <div className="e-image --radius-m">
                      <img
                        src="/static/header/illustration-signup-conductor.svg"
                        alt="Conductor"
                      />
                    </div>
                    Regístrate como conductor
                  </a>
                </li>
              </ul>

              <div className="m-header__popover__pill js-header-popover-pill"></div>
            </nav>

            <nav className="m-header__popover__section js-header-popover-section">
              <ul className="m-header__popover__menu">
                <li>
                  <a
                    className="m-header__popover__link --illustration js-header-popover-link"
                    data-link="header-list"
                    rel="nofollow noreferrer noopener"
                    data-nosnippet
                    href="https://app.cabify.com/signup"
                  >
                    <div className="e-image --radius-m">
                      <img
                        src="/static/header/illustration-signup-empresa.svg"
                        alt="Empresa"
                      />
                    </div>
                    Regístrate como empresa
                  </a>
                </li>
              </ul>

              <div className="m-header__popover__pill js-header-popover-pill"></div>
            </nav>
          </div>

          <div
            className="m-header__popover__inner --hidden js-header-nav-menu"
            data-header-menu="language"
            aria-hidden="true"
          >
            <nav className="m-header__popover__section --l js-header-popover-section">
              <div className="m-header__popover__title e-heading --3xs">
                Local
              </div>

              <ul className="m-header__popover__menu --l">
                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link GTM-header-nav-item"
                    href="/ar/conductores/accesibilidad"
                    data-link="header-lang-ar"
                  >
                    <i className="e-icon --flag-ar" aria-hidden="true"></i>
                    Argentina
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link GTM-header-nav-item"
                    href="/cl/conductores/accesibilidad"
                    data-link="header-lang-cl"
                  >
                    <i className="e-icon --flag-cl" aria-hidden="true"></i>
                    Chile
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link GTM-header-nav-item"
                    href="/co/conductores/accesibilidad"
                    data-link="header-lang-co"
                  >
                    <i className="e-icon --flag-co" aria-hidden="true"></i>
                    Colombia
                  </a>
                </li>
              </ul>

              <ul className="m-header__popover__menu --l">
                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link GTM-header-nav-item"
                    href="/es/conductores/accesibilidad"
                    data-link="header-lang-es"
                  >
                    <i className="e-icon --flag-es"></i>
                    España
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link GTM-header-nav-item"
                    href="/pe/conductores/accesibilidad"
                    data-link="header-lang-pe"
                  >
                    <i className="e-icon --flag-pe"></i>
                    Perú
                  </a>
                </li>

                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link GTM-header-nav-item"
                    href="/uy/conductores/accesibilidad"
                    data-link="header-lang-uy"
                  >
                    <i className="e-icon --flag-uy"></i>
                    Uruguay
                  </a>
                </li>
              </ul>

              <div className="m-header__popover__pill --l js-header-popover-pill"></div>
            </nav>

            <nav className="m-header__popover__section js-header-popover-section">
              <div className="m-header__popover__title e-heading --3xs">
                Global
              </div>

              <ul className="m-header__popover__menu --l">
                <li>
                  <a
                    className="m-header__popover__link js-header-popover-link GTM-header-nav-item"
                    href="/en/drivers/accessibility"
                    data-link="header-lang-en"
                  >
                    <i className="e-icon --pin"></i>
                    English
                  </a>
                </li>
              </ul>

              <div className="m-header__popover__pill --l js-header-popover-pill"></div>
            </nav>
          </div>

          <div
            className="m-header__popover__inner --hidden js-header-nav-menu"
            data-header-menu=""
            aria-hidden="true"
          ></div>
        </div>
      </m-header>
    </div>
  );
}
