import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Media
} from 'reactstrap';

import Slides from "./components/Slides";
import Grid from "./components/Grid/Grid";
import Offer from "./components/Offer";
import Headline from "./components/Headline";

import imageTatjana from './images/tatjana.jpg';

class App extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>

        <Navbar color="dark" fixed="top" dark expand="md">
          <Container>
            <NavbarBrand href="/">Mystique Art</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="#gallery">Galerie</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#prices">Preise</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#aboutme">Über mich</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#contact">Kontakt</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#legal">Impressum</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>

        <Slides className="navbar-buffer" />

        <Container>

          <p className="lead text-center mb-5">
            Lass dich in fantasievolle Gestalten wie Feen, Prinzessinnen, Göttinnen & dunkle Wesen verwandeln und halte diesen Moment für alle Ewigkeit fest. Wer möchte nicht mal einen Tag dem stressigen Alltag entfliehen und stattdessen in eine Fantasiewelt entfliehen, in der alles Möglich ist. Von ganz normalen Portraitaufnahmen bis hin zu aufwendigen Fantasyshootings ist alles Möglich. Auch an Veranstaltungen und Hochzeiten mache ich gerne Aufnahmen von eurem Tag. Ich freue mich auch euch...</p>

          <Headline>
            <a name="gallery">Gallerie</a>
          </Headline>

          <Grid />

          <Headline>
            <a name="prices">Preise</a>
          </Headline>

          <div className="w-75 mx-auto mb-5">

            <Offer
              title="PORTRAITFOTOGRAFIE"
              price="100,-"
              text="Komme zu mir und ich fotografiere dich in meinem Home Fotostudio. Anschließend bekommst du von mir 15 Bilder n digitaler Form und ein leicht bearbeitetes Bild."
            />

            <Offer
              title="PORTRAITFOTOGRAFIE MIT MAKE-UP"
              price="200,-"
              text="Komme in deinem eigenen Outfit und ich verpasse dir ein passendes Make-Up. Anschließend erhälst du 20 Bilddateien und zwei bearbeitete Bilder."
            />

            <Offer
              title="FANTASYSHOOTING"
              price="300,-"
              text="Dieses Fotoschooting beinhaltet ein von mir selbst erstelltes Outfit. Thema und Outfit sind von dir frei wählbar. Oder du kannst dich auch von mir überraschen lassen. Ich schminke dich und fotografiere dich in meinem Home Fotostudio oder draußen. Anschließend bekommst du 25 Bilddateien + 3 bearbeitete Bilder von mir."
            />

            <Offer
              title="SPEZIALSHOOTING"
              price="400,-"
              text="Für 400,- kannst du dir ein Wunschoutfit von mir anfertigen lassen und bekommst dann die gleichen Konditionen wie bei dem Fantasyshooting."
            />

            <Offer
              title="BILDBEARBEITUNG"
              price="30,-"
              text="Schicke mir ein Bild und ich bearbeite es für dich oder lass dir Bilder aus unseren gemeinsamen Shootings bearbeiten."
            />

          </div>

          <Headline>
            <a name="aboutme">Über Mich</a>
          </Headline>

          <div className="mb-5">

            <Row>
              <Col xs="12" sm="6">
                <Media className="mb-3" object width="100%" src={imageTatjana} alt="Tatjana" />
              </Col>
              <Col xs="12" sm="6">
                <p>
                  Hinter dem künstlernamen Mystique Art stehe ich, Tatjana. Ich habe eigentlich Informations- und Kommunikationsdesign studiert und danach ein paar Jahre als Grafikerin bei einem Kalenderverlag gearbeitet. Dort habe ich bereits gelernt Bildauswahlen zu machen, Fotos zu bearbeiten und die Kalender zu designen. Doch ich wollte unbedingt selbst so tolle Bilder erschaffen und das mit Menschen. Ich wollte Menschen etwas geben, was ich lange Zeit selbst nicht hatte: Selbstvertrauen und Selbstbewusstsein. Deshalb würde ich mich freuen auch dich zu verwandeln, um dir zu zeigen was in dir steckt.</p>
              </Col>
            </Row>

          </div>

          <Headline>
            <a name="contact">Kontakt</a>
          </Headline>

          <div className="mb-5 text-center">

            <p>Buchungsanfragen bitte an meine unten angegebene E-Mail Adresse oder über den Messenger meiner Facebook-Seite.</p>

            <p>
              MYSTIQUE ART - FOTOGRAPHY<br />
              Inhaber: Tatjana Bartsch<br />
              Neudorfer Markt 11<br />
              47057 Duisburg
            </p>

            <p>
              E-Mail: <a href="mailto:tatjana.bartsch89@gmail.com">tatjana.bartsch89@gmail.com</a><br />
              Tel.: <a href="tel:+491732005842">+491732005842</a>
            </p>

          </div>

          <Headline>
            <a name="legal">Datenschutzerklärung</a>
          </Headline>

          <div className="mb-5">

            <h5 className="text-center">Datenschutz</h5>

            <p>Nachfolgend möchten wir Sie über unsere Datenschutzerklärung informieren. Sie finden hier Informationen über die Erhebung und Verwendung persönlicher Daten bei der Nutzung unserer Webseite. Wir beachten dabei das für Deutschland geltende Datenschutzrecht. Sie können diese Erklärung jederzeit auf unserer Webseite abrufen.</p>

            <p>Wir weisen ausdrücklich darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen und nicht lückenlos vor dem Zugriff durch Dritte geschützt werden kann.</p>

            <h5 className="text-center">Personenbezogene Daten</h5>

            <p>Sie können unsere Webseite ohne Angabe personenbezogener Daten besuchen. Soweit auf unseren Seiten personenbezogene Daten (wie Name, Anschrift oder E-Mail Adresse) erhoben werden, erfolgt dies, soweit möglich, auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Sofern zwischen Ihnen und uns ein Vertragsverhältnis begründet, inhaltlich ausgestaltet oder geändert werden soll oder Sie an uns eine Anfrage stellen, erheben und verwenden wir personenbezogene Daten von Ihnen, soweit dies zu diesen Zwecken erforderlich ist (Bestandsdaten). Wir erheben, verarbeiten und nutzen personenbezogene Daten soweit dies erforderlich ist, um Ihnen die Inanspruchnahme des Webangebots zu ermöglichen (Nutzungsdaten). Sämtliche personenbezogenen Daten werden nur solange gespeichert wie dies für den geannten Zweck (Bearbeitung Ihrer Anfrage oder Abwicklung eines Vertrags) erforderlich ist. Hierbei werden steuer- und handelsrechtliche Aufbewahrungsfristen berücksichtigt. Auf Anordnung der zuständigen Stellen dürfen wir im Einzelfall Auskunft über diese Daten (Bestandsdaten) erteilen, soweit dies für Zwecke der Strafverfolgung, zur Gefahrenabwehr, zur Erfüllung der gesetzlichen Aufgaben der Verfassungsschutzbehörden oder des Militärischen Abschirmdienstes oder zur Durchsetzung der Rechte am geistigen Eigentum erforderlich ist.</p>

            <Headline>Haftungsausschluss</Headline>

            <p>Als Dienstanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Dienstanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

            <h5 className="text-center">Urheberrecht</h5>

            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>

          </div>

        </Container>

        <footer className="text-center">Copyright 2017 by Mystique Art</footer>

      </div >
    );
  }
}

export default App;
