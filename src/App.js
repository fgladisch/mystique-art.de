import React, { Component } from "react";
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
} from "reactstrap";

import "./App.css";

import Slides from "./components/Slides/Slides";
import Gallery from "./components/Gallery/Gallery";
import Offer from "./components/Offer/Offer";
import Headline from "./components/Headline";
import Line from "./components/Line/Line";
import Logo from "./components/Logo/Logo";

import imageLogo from "./images/logo.png";
import imageTatjana from "./images/gallery/tatjana_3.jpg";

import { imageOffer1, imageOffer2, imageOffer3, imageOffer4, imageOffer5 } from "./images/offers";
import imageOffer6 from "./images/gallery/janina_4.jpg";

class App extends Component {
	constructor(props) {
		super(props);

		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.closeNavbar = this.closeNavbar.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
	}

	state = {
		navbarVisible: false,
		isNavbarOpen: false
	};

	toggleNavbar() {
		this.setState({
			isNavbarOpen: !this.state.isNavbarOpen
		});
	}

	closeNavbar() {
		this.setState({
			isNavbarOpen: false
		});
	}

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	}

	handleScroll(event) {
		const scrollTop = event.srcElement.documentElement.scrollTop;
		const navbarVisible = scrollTop > 150;
		this.setState({ navbarVisible });
	}

	renderNavbar() {
		if (this.state.navbarVisible) {
			return (
				<Navbar color="dark" fixed="top" dark expand="md">
					<Container>
						<NavbarBrand href="#top">
							<Media object src={imageLogo} height="50" alt="Logo" />
						</NavbarBrand>
						<NavbarToggler onClick={this.toggleNavbar} />
						<Collapse isOpen={this.state.isNavbarOpen} navbar>
							<Nav navbar className="mr-auto">
								<NavItem>
									<NavLink href="#gallery" onClick={this.closeNavbar}>
										Galerie
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="#prices" onClick={this.closeNavbar}>
										Preise
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="#aboutme" onClick={this.closeNavbar}>
										Über mich
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="#contact" onClick={this.closeNavbar}>
										Kontakt
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="#legal" onClick={this.closeNavbar}>
										Impressum
									</NavLink>
								</NavItem>
							</Nav>
							<Nav navbar>
								<NavItem>
									<NavLink
										target="_blank"
										onClick={this.closeNavbar}
										href="https://www.facebook.com/MystiqueArtPhotography"
									>
										<i className="fab fa-facebook d-md-none" />
										<i className="fab fa-2x fa-facebook d-none d-sm-none d-md-inline" />
										<span className="ml-2 d-md-none">Facebook</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										target="_blank"
										onClick={this.closeNavbar}
										href="https://www.instagram.com/mystique.art.photography"
									>
										<i className="fab fa-instagram d-md-none" />
										<i className="fab fa-2x fa-instagram d-none d-sm-none d-md-inline" />
										<span className="ml-2 d-md-none">Instagram</span>
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			);
		}
	}

	render() {
		return (
			<div>
				<a className="anchor" name="top">
					Top
				</a>

				{this.renderNavbar()}

				<Container>
					<Logo />

					<Line />

					<Headline>INSZENIERTE FOTOGRAFIE & KOSTÜME</Headline>

					<Slides />

					<p className="lead text-center">
						Du möch&shy;test ger&shy;ne mal für ei&shy;nen Tag dem gan&shy;zen
						All&shy;tags&shy;stress ent&shy;fliehen, alles weit hin&shy;ter dir las&shy;sen und
						statt&shy;des&shy;sen in eine Fantasie&shy;welt ent&shy;fliehen, in der alles möglich
						ist? Du möch&shy;test dich ver&shy;wan&shy;deln, in an&shy;dere Rol&shy;len
						schlüp&shy;fen und sehen wie wan&shy;del&shy;bar du bist?
						<br />
						<br />
						Dann komm mich be&shy;suchen und lass dich von mir für einen Tag ver&shy;zaubern. Mit
						viel Kre&shy;a&shy;ti&shy;vi&shy;tät und Liebe zum De&shy;tail er&shy;schaffe ich mit
						dir zu&shy;sammen Märchen&shy;welten. Ich ver&shy;wandel dich in
						fan&shy;ta&shy;sie&shy;volle Ge&shy;stalten wie Feen, Prin&shy;zes&shy;sinnen,
						Göt&shy;tinnen & dunkle Wesen und halte diesen Mo&shy;ment für dich in ei&shy;nem
						Foto&shy;shoo&shy;ting für alle Ewig&shy;keit fest.
						<br />
						<br />
						Meine Mo&shy;ti&shy;va&shy;tion ist es dich auf eine klei&shy;ne Rei&shy;se
						mit&shy;zu&shy;neh&shy;men und dir zu zei&shy;gen, was in dir steckt. Er&shy;le&shy;be
						das Fo&shy;to&shy;shoo&shy;ting der be&shy;son&shy;der&shy;en Art. Ich freue mich auf
						dich...
					</p>

					<Line />

					<a className="anchor" name="gallery">
						Gallerie
					</a>

					<Headline>Galerie</Headline>

					<Gallery />

					<Line />

					<a className="anchor" name="prices">
						Preise
					</a>

					<Headline>Preise</Headline>

					<Offer title="COME AS YOU ARE" price="€ 100,-" image={imageOffer1}>
						<p>
							Komme fertig geschminkt, gestylt und im eigenen Outfit zu mir und ich fotografiere
							dich in meinem Home Fotostudio oder draußen an einer nahe gelegenen Location.
							Anschließend bekommst du von mir 15 Bilder in digitaler Form und ein aufwändig
							bearbeitetes Bild.
						</p>
						<ul>
							<li>ca. 30 Minuten Shooting</li>
							<li>15 Auswahldateien</li>
							<li>1 bearbeitetes Bild</li>
						</ul>
					</Offer>

					<Offer title="KLEINES FANTASYSHOOTING" price="€ 240,-" image={imageOffer2}>
						<p>
							Komme in deinem eigenen Outfit zu mir oder suche dir nach Absprache eins in meinem
							Fundus aus und ich zaubere für dich ein zu dir passendes Make-Up. Anschließend
							fotografiere ich dich in meinem Home Fotostudio, oder draußen an einer nahe gelegenen
							Location. Anschließend bekommst du 20 Bilder in digitaler Form und zwei aufwändig
							bearbeitete Bilder.
						</p>
						<ul>
							<li>ca. 1 Stunde Shooting</li>
							<li>20 Auswahldateien</li>
							<li>2 bearbeitete Bilder</li>
						</ul>
					</Offer>

					<Offer title="GROßES FANTASYSHOOTING" price="€ 300,-" image={imageOffer3}>
						<p>
							Suche dir ein Outfit aus meinem Fundus aus und ich zaubere für dich ein aufwändiges
							Make-Up. Anschließend fotografiere ich dich in meinem Home Fotostudio in zwei Sets,
							oder draußen an einer schönen Location. Anschließend bekommst du 30 Bilder in
							digitaler Form und drei aufwändig bearbeitete Bilder.
						</p>
						<ul>
							<li>ca. 1,5 -2 Stunden Shooting</li>
							<li>30 Auswahldateien</li>
							<li>3 bearbeitete Bilder</li>
						</ul>
					</Offer>

					<Offer title="SPEZIALSHOOTING" price="€ 400,-" image={imageOffer4}>
						<p>
							Lasse dir von mir für dein Shooting ein individuelles Wunschoutfit anfertigen oder
							suche dir zwei Outfits aus meinem Fundus aus und ich zaubere für dich ein passendes
							aufwändiges Make-Up. Anschließend fotografiere ich dich in meinem Home Fotostudio in
							zwei Sets, oder draußen an einer schönen Location. Anschließend bekommst du 40 Bilder
							in digitaler Form und 5 aufwändig bearbeitete Bilder.
						</p>
						<ul>
							<li>ca. 2-3 Stunden Shooting</li>
							<li>40 Auswahldateien</li>
							<li>5 bearbeitete Bilder</li>
						</ul>
					</Offer>

					<Offer title="BILDBEARBEITUNG" price="€ 30,-" image={imageOffer5}>
						<p>
							Wenn du weitere Bilder aus unserem gemeinsamen Shooting bearbeiten lassen möchtest,
							kannst du das für 30€ pro Bild nachträglich bei mir buchen. Oder hast du vielleicht
							den Wunsch einem privaten Bild von dir Magie zu verleihen? Oder dein Abschlussbild zu
							verschönern? Dann Schicke mir ein Bild von dir und ich bearbeite es für dich.
						</p>
					</Offer>

					<Offer title="BADEWANNENSHOOTING" price="€ 250,-" image={imageOffer6}>
						<p>
							Entspanne dich bei einem sinnlichen Bad mit blumigen Düften. Das Badewasser gestalte
							ich gerne nach deinen Vorstellungen. Wenn du dich mit Dessous wohler fühlst, kannst du
							dir gerne welche aus meinem Fundus aussuchen. Ein passendes Make-Up zaubere ich dir
							natürlich auch. Anschließend fotografiere ich dich in meiner Badewanne in
							verschiedenen Posen. Du bekommst 20 Bilder in digitaler Form und 2 aufwändig
							bearbeitete Bilder.
						</p>
						<ul>
							<li>ca. 1 Stunde Shooting</li>
							<li>Materialien für das Wasser (Farbe, Glitzer, Blüten, Perlen...)</li>
							<li>20 Auswahldateien</li>
							<li>2 bearbeitete Bilder</li>
						</ul>
					</Offer>

					<Line />

					<a className="anchor" name="aboutme">
						Über Mich
					</a>

					<Headline>Über Mich</Headline>

					<Row>
						<Col xs="12" md="4">
							<Media
								className="App-aboutme-image mb-3 shadow"
								object
								width="100%"
								src={imageTatjana}
								alt="Tatjana"
							/>
						</Col>
						<Col xs="12" md="8">
							<p>
								Hinter dem Künstlernamen <strong>Mystique Art</strong> stehe ich: Tatjana.
								Aufgewachsen bin ich in einem kleinen Städtchen namens Rheinberg. Kaum jemand kennt
								diese Stadt, die zum Kreis Wesel gehört. Ich bin nun mal ein richtiges Landei.
								Mittlerweile leben mein Lebensgefährte und ich mit einer Katze in Duisburg und das
								Großstadtleben hat mich zu sich geholt.
								<br />
								<br />
								Seit ich einen Stift in den Händen halten kann, habe ich die Kreativität in mir
								losgelassen und gezeichnet, gebastelt und mir für meine Kuscheltiere Fantasiewelten
								ausgedacht. Als ich älter wurde, lebte ich mich an Karneval und Halloween voll aus
								und erschuf immer ausgefallenere Kostüme. Lange Zeit war das alles jedoch nur ein
								Hobby. Nachdem ich eine Ausbildung zur Bürokauffrau gemacht hatte, studierte ich
								Informations- und Kommunikationsdesign, um dem kreativen Arbeiten näher zu kommen.
								Danach arbeitete ich ein paar Jahre als Grafikerin in einem Kalenderverlag. Dort
								habe ich bereits gelernt Bildauswahlen zu machen, Fotos zu bearbeiten und Kalender,
								sowie Kataloge zu gestalten. Doch ich wollte unbedingt noch einen Schritt weiter
								gehen und selbst so tolle Bilder erschaffen und zwar mit und für Menschen. Deshalb
								habe ich mich dazu entschlossen, meine Leidenschaft zu meinem Beruf zu machen und
								Menschen wie dir zu zeigen was in dir steckt. Nichts macht mich glücklicher, als das
								Lächeln auf den Gesichtern derer zu sehen, denen ich die entstandenen Bilder eines
								Shootings zeige...
							</p>
						</Col>
					</Row>

					<Line />

					<a className="anchor" name="contact">
						Kontakt
					</a>

					<Headline>Kontakt</Headline>

					<div className="text-center">
						<p>
							Buchungsanfragen bitte an meine unten angegebene E-Mail-Adresse oder über den
							Messenger bei Facebook oder Instagram.
						</p>

						<p>
							E-Mail: <a href="mailto:tatjana@mystique-art.de">tatjana@mystique-art.de</a>
						</p>
						<p>
							Tel.: <a href="tel:+491732005842">+491732005842</a>
						</p>
					</div>

					<Line />

					<a className="anchor" name="legal">
						Impressum
					</a>

					<Headline>Impressum</Headline>

					<div className="text-center">
						<h5>Angaben gemäß §5 TMG:</h5>
						<p>
							<strong>Mystique Art - Photography</strong>
							<br />
							Tatjana Bartsch<br />
							Neudorfer Markt 11<br />
							47057 Duisburg<br />
						</p>
						<p>
							Tel.: +491732005842<br />
							E-Mail: tatjana@mystique-art.de
						</p>
					</div>

					<Headline>Datenschutz&shy;erklärung</Headline>

					<div className="text-center">
						<p>
							Nachfolgend möchten wir Sie über unsere Datenschutzerklärung informieren. Sie finden
							hier Informationen über die Erhebung und Verwendung persönlicher Daten bei der Nutzung
							unserer Webseite. Wir beachten dabei das für Deutschland geltende Datenschutzrecht.
							Sie können diese Erklärung jederzeit auf unserer Webseite abrufen.
						</p>

						<p>
							Wir weisen ausdrücklich darauf hin, dass die Datenübertragung im Internet (z.B. bei
							der Kommunikation per E-Mail) Sicherheitslücken aufweisen und nicht lückenlos vor dem
							Zugriff durch Dritte geschützt werden kann.
						</p>

						<h4> Streitschlichtung </h4>

						<p>
							Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
							Verbraucherschlichtungsstelle teilzunehmen.
						</p>

						<h4>Personenbezogene Daten</h4>

						<p>
							Sie können unsere Webseite ohne Angabe personenbezogener Daten besuchen. Soweit auf
							unseren Seiten personenbezogene Daten (wie Name, Anschrift oder E-Mail Adresse)
							erhoben werden, erfolgt dies, soweit möglich, auf freiwilliger Basis. Diese Daten
							werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Sofern
							zwischen Ihnen und uns ein Vertragsverhältnis begründet, inhaltlich ausgestaltet oder
							geändert werden soll oder Sie an uns eine Anfrage stellen, erheben und verwenden wir
							personenbezogene Daten von Ihnen, soweit dies zu diesen Zwecken erforderlich ist
							(Bestandsdaten). Wir erheben, verarbeiten und nutzen personenbezogene Daten soweit
							dies erforderlich ist, um Ihnen die Inanspruchnahme des Webangebots zu ermöglichen
							(Nutzungsdaten). Sämtliche personenbezogenen Daten werden nur solange gespeichert wie
							dies für den geannten Zweck (Bearbeitung Ihrer Anfrage oder Abwicklung eines Vertrags)
							erforderlich ist. Hierbei werden steuer- und handelsrechtliche Aufbewahrungsfristen
							berücksichtigt. Auf Anordnung der zuständigen Stellen dürfen wir im Einzelfall
							Auskunft über diese Daten (Bestandsdaten) erteilen, soweit dies für Zwecke der
							Strafverfolgung, zur Gefahrenabwehr, zur Erfüllung der gesetzlichen Aufgaben der
							Verfassungsschutzbehörden oder des Militärischen Abschirmdienstes oder zur
							Durchsetzung der Rechte am geistigen Eigentum erforderlich ist.
						</p>

						<h4>Haftungsausschluss</h4>

						<p>
							Als Dienstanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
							nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
							Dienstanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
							Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
							rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
							Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
							Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
							konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
							Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
						</p>

						<h4>Urheberrecht</h4>

						<p>
							Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
							unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
							und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
							schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien
							dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit
							die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
							Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
							gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
							werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
							Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
						</p>

						<h4>Haftung für Links</h4>

						<p>
							Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
							Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
							übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
							oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt
							der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
							Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
							verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
							zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
							entfernen.
						</p>
					</div>
				</Container>

				<Line />

				<footer className="text-center">Copyright 2017 by Mystique Art</footer>
			</div>
		);
	}
}

export default App;
