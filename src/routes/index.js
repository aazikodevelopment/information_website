import { Route, BrowserRouter as Router } from "react-router-dom";
import Blog from "../components/blog/blog";
import BlogDetail from "../components/BlogDetail";
import ContactUs from "../components/contactUs/contactUs";
import CreateTicket from "../components/createTicket/createTicket";
import Footer from "../components/footer";
import AazikoContainerTraking from "./AazikoContainerTraking";
import Aboutus from "./Aboutus";
import B2bSales from "./b2bSales";
import BuyerPartners from "./BuyerPartners";
import GalleryPage from "./galleryPage";
import HomePage from "./home";
import HowWeWorkPage from "./howWeWork";
import KeywordsTrends from "./KeywordsTrends";
import Kwa from "./Kwa";
import LogisticsService from "./LogisticsService";
import Lsqs from "./Lsqs";
import ProductShowcase from "./ProductShowcase";
import Resources from "./Resources";
import RoutePlanner from "./RoutePlanner";
import BulkcargoShipchartering from "./Service/BulkcargoShipchartering";
import CargoInsurance from "./Service/CargoInsurance";
import DangerousGoodsTransportation from "./Service/DangerousGoodsTransportation";
import WorkSellerPage from "./workSellerPage";
import FclShipping from "./Service/FclShipping";
import LclShipping from "./Service/LclShipping";
import ProjectCargo from "./Service/ProjectCargo";
import ReeferCargoDelivery from "./Service/ReeferCargoDelivery";
import SurveyServices from "./Service/SurveyServices";
import Warehousing from "./Service/Warehousing";
import Storefront from "./Storefront";
import InspectionServices from "./Service/InspectionServices";
import CustomsClearance from "./Service/CustomsClearance";
import AllShippingLeads from "./Service/AllShippingLeads/AllShippingLeads";
import SupplierMemberships from "./SupplierMemberships";
import AazikoLoadCalculator from "./AazikoLoadCalculator";
import TradeAssurance from "./TradeAssurance";
import TradeServices from "./TradeServices";
import ContainerTracking from "./ContainerTracking";
import Finance from "./Finance";
import MyAccount from "./MyAccount";
import AazikoRequestQuote from "./AazikoRequestQuote";
import PrivacyPolicy from "./PrivacyPolicy";
import NewHome from "./NewHome";
import HowWorkBuyer from "./HowWorkBuyer";
import Subheader from "../components/Subheader";
import HowWorkSeller from "./HowWorkSeller";
import Payment from "./Payment";
import CompanyDetails from "./CompanyDetails";
import InspectionPartnerService from "./InspectionPartnerService";
import Individual from "./individual";
import PostYourRequest from "./PostYourRequest";
import BuyerCollaborate from "./BuyerCollaborate";
import SupplerCollaborate from "./SupplerCollaborate";
import SupplierPayment from "./SupplierPayment";
import Customs from "./Customs";
import Sourcing from "./Sourcing";
import ComingSoon from "../components/ComingSoon";
import LogisticExplorer from "./LogisticExplorer";
import ShipSchedule from "./ShipSchedule";
import DailyUpdate from "./DailyUpdate";
import Inspection from "./Inspection";
import Ourfeature from "./ourfeature";
import OprationsCounsil from "./oprationsCounsil";
import OnsiteInspections from "./OnsiteInspections";
import RemoteInspection from "./RemoteInspection";
import WorkWithAaziko from "./WorkWithAaziko";
import Integrity from "./Integrity";
import ContactUsNew from "./ContactUsNew";
import Carriers from "./Carriers";
import HomeNew from "./HomeNew";
import ImporterExporter from "./ImporterExporter";
import HelpCenter from "./HelpCenter/HelpCenter";
import LogisticMap from "./LogisticMap";
import ContainerDimensions from "./ContainerDimensions";
import ContainerDimensionsDetails from "./ContainerDimensionsDetails";
import PalletDimensions from "./PalletDimensions";
import UldContainerTypes from "./UldContainerTypes";
import Certification from "./Certification";
import AuditingandCompliance from "./AuditingandCompliance";
import Incoterms from "./Incoterms";
import ImoClasses from "./ImoClasses";
import ParameterSeaContainers from "./ParameterSeaContainers";
import TypesRailwayWagons from "./TypesRailwayWagons";
import VesselTypes from "./VesselTypes";
import VesselParameterSeaContainers from "./VesselParameterSeaContainers";
import TruckTypes from "./TruckTypes";
import TruckTypesParameter from "./TruckTypesParameter";
import ReeferCargo from "./ReeferCargo";
import FreightShipping from "./FreightShipping";
import Linerterms from "./Linerterms";
import ServicesFees from "./ServicesFees";
import UnitConverter from "./UnitConverter";
import DemurrageStorageCalculator from "./DemurrageStorageCalculator";
import ShippingLines from "./ShippingLines";
import LearnMore from "./LearnMore";
import PressRoom from "./PressRoom";
import CustomsTariffs from "./CustomsTariffs";
import TradeRemedies from "./TradeRemedies";
import RegulatoryRequirements from "./RegulatoryRequirements";
import CompareCompetitor from "./CompareCompetitor";

import HSCode from "./HSCode";
import CompareProduct from "./CompareProduct";
import Insurance from "./Insurance";
import LSQ from "./LSQ";
import WorldSeaPort from "./WorldSeaPort";
import CustomsEasy from "./CustomsEasy";
import TradeAgreement from "./TradeAgreement";
import Customs2 from "./Customs2";
import Footer2 from "../components/footer2";
import ProductTesting from "./ProductsTesting/Index";
import AssuranceQuility from "./AssuranceQuality/Index";
import RemoteSampleApproval from "./RemoteSampleApproval/Index";
import PreProducationInspecation from "./PreProducationInspecation/Index";
import PreCustomsClearanceInspecation from "./PreCustomsClearanceInspecation/Index";
import DuringProducationInspecation from "./DuringProducationInspecation/Index";
import FinalRandonInspecation from "./FinalRandonInspecation/Index";
import PreShipmentInspecation from "./PreShipmentInspecation";
import ContainerLoadingInspecation from "./ContainerLoadingInspecation";
import SpecailInspecation from "./SpecailInspecation";
import CertificationApproval from "./CertificationApproval";
import SamplingAndTesting from "./SamplingAndTesting";
import DocumentationReview from "./DocumentationReview";
const DefaultLayout = ({ children }) => (
  <>
    <Subheader />
    {children}
    <Footer />
  </>
);

const ChildLayout = ({ children }) => <>{children}</>;

const ChildLayoutNew = ({ children }) => (
  <>
    <Subheader />
    {children}
    <Footer />
  </>
);

const ChildLayoutNew2 = ({ children }) => (
  <>
    <Subheader />
    {children}
    <Footer2 />
  </>
);


function RouteWrapper({ component: Component, layout: Layout, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

export default function Routes() {
  return (
    <>
      <Router>
        <RouteWrapper exact layout={ChildLayout} path="/" component={HomeNew} />
        <RouteWrapper exact layout={ChildLayout} path="/home-new" component={NewHome} />
        <RouteWrapper exact layout={DefaultLayout} path="/new-home" component={HomePage} />
        <RouteWrapper exact layout={DefaultLayout} path="/how-we-work-for-buyer" component={HowWeWorkPage} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/gallery-page" component={GalleryPage} />
        <RouteWrapper exact layout={DefaultLayout} path="/contact" component={ContactUs} />
        <RouteWrapper exact layout={DefaultLayout} path="/blog" component={Blog} />
        <RouteWrapper exact layout={DefaultLayout} path="/blogdetails/:id" component={BlogDetail} />
        <RouteWrapper exact layout={DefaultLayout} path="/create-ticket" component={CreateTicket} />
        <RouteWrapper exact layout={DefaultLayout} path="/privacy-policy" component={PrivacyPolicy} />
        <RouteWrapper exact layout={DefaultLayout} path="/about-us" component={Aboutus} />
        <RouteWrapper exact layout={DefaultLayout} path="/aaziko-container-traking" component={AazikoContainerTraking} />
        <RouteWrapper exact layout={DefaultLayout} path="/b2b-sales" component={B2bSales} />
        <RouteWrapper exact layout={DefaultLayout} path="/buyer-partners" component={BuyerPartners} />
        <RouteWrapper exact layout={DefaultLayout} path="/keywords-trends" component={KeywordsTrends} />
        <RouteWrapper exact layout={DefaultLayout} path="/kwa" component={Kwa} />
        <RouteWrapper exact layout={DefaultLayout} path="/logistics-service" component={LogisticsService} />
        <RouteWrapper exact layout={DefaultLayout} path="/lsqs" component={LSQ} />
        <RouteWrapper exact layout={DefaultLayout} path="/product-showcase" component={ProductShowcase} />
        <RouteWrapper exact layout={DefaultLayout} path="/resources" component={Resources} />
        <RouteWrapper exact layout={DefaultLayout} path="/route-planner" component={RoutePlanner} />
        <RouteWrapper exact layout={DefaultLayout} path="/bulkcargo-shipchartering" component={BulkcargoShipchartering} />
        <RouteWrapper exact layout={DefaultLayout} path="/cargoInsurance" component={CargoInsurance} />
        <RouteWrapper exact layout={DefaultLayout} path="/dangerous-goods-transportation" component={DangerousGoodsTransportation} />
        <RouteWrapper exact layout={DefaultLayout} path="/fcl-shipping" component={FclShipping} />
        <RouteWrapper exact layout={DefaultLayout} path="/lcl-shipping" component={LclShipping} />
        <RouteWrapper exact layout={DefaultLayout} path="/project-cargo" component={ProjectCargo} />
        <RouteWrapper exact layout={DefaultLayout} path="/reefer-cargo-delivery" component={ReeferCargoDelivery} />
        <RouteWrapper exact layout={DefaultLayout} path="/survey-services" component={SurveyServices} />
        <RouteWrapper exact layout={DefaultLayout} path="/warehousing" component={Warehousing} />
        <RouteWrapper exact layout={DefaultLayout} path="/storefront" component={Storefront} />
        <RouteWrapper exact layout={DefaultLayout} path="/trade-Assurance" component={TradeAssurance} />
        <RouteWrapper exact layout={DefaultLayout} path="/inspection-services" component={InspectionServices} />
        <RouteWrapper exact layout={DefaultLayout} path="/customs-clearance" component={CustomsClearance} />
        <RouteWrapper exact layout={DefaultLayout} path="/supplier-memberships" component={SupplierMemberships} />
        <RouteWrapper exact layout={DefaultLayout} path="/aaziko-load-calculator" component={AazikoLoadCalculator} />
        <RouteWrapper exact layout={DefaultLayout} path="/trade-services" component={TradeServices} />
        <RouteWrapper exact layout={DefaultLayout} path="/how-we-work-for-seller" component={WorkSellerPage} />
        <RouteWrapper exact layout={DefaultLayout} path="/all-shipping-leads" component={AllShippingLeads} />
        <RouteWrapper exact layout={DefaultLayout} path="/container-tracking" component={ContainerTracking} />
        <RouteWrapper exact layout={DefaultLayout} path="/finance" component={Finance} />
        <RouteWrapper exact layout={DefaultLayout} path="/my-account" component={MyAccount} />
        <RouteWrapper exact layout={DefaultLayout} path="/aaziko-request-quote" component={AazikoRequestQuote} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/how-we-work-for-buyer-new" component={HowWorkBuyer} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/how-we-work-for-seller-new" component={HowWorkSeller} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/payment" component={Payment} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/company-details" component={CompanyDetails} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/inspection-partner-service" component={InspectionPartnerService} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/individual" component={Individual} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/post-your-request" component={PostYourRequest} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/buyer-collaborate" component={BuyerCollaborate} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/seller-collaborate" component={SupplerCollaborate} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/supplier-payment" component={SupplierPayment} />
        <RouteWrapper exact layout={ChildLayoutNew2} path="/customs" component={Customs} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/sourcing" component={Sourcing} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/coming-soons" component={ComingSoon} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/our-feature" component={Ourfeature} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/logistic-explorer" component={LogisticExplorer} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/ship-schedule" component={ShipSchedule} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/daily-update" component={DailyUpdate} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/inspection" component={Inspection} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/oprations-counsil" component={OprationsCounsil} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/onsite-inspections" component={OnsiteInspections} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/remote-inspection" component={RemoteInspection} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/products-testing" component={ProductTesting} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/quility-assurance" component={AssuranceQuility} />

        <RouteWrapper exact layout={ChildLayoutNew} path="/pre-producation-inspecation" component={PreProducationInspecation} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/pre-customs-clearance-inspecation" component={PreCustomsClearanceInspecation} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/during-producation-inspecation" component={DuringProducationInspecation} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/final-random-inspecation" component={FinalRandonInspecation} />

        <RouteWrapper exact layout={ChildLayoutNew} path="/remote-sample-approval" component={RemoteSampleApproval} />
        
        <RouteWrapper exact layout={ChildLayoutNew} path="/pre-shipment-inspecation" component={PreShipmentInspecation} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/container-loading-inspcation" component={ContainerLoadingInspecation} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/specail-inspecation" component={SpecailInspecation} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/certification-and-approval" component={CertificationApproval} />


        {/* <RouteWrapper exact layout={ChildLayoutNew} path="/remote-sample-approval" component={RemoteSampleApproval} /> */}
        <RouteWrapper exact layout={ChildLayoutNew} path="/sampling-and-testing" component={SamplingAndTesting} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/documentation-review" component={DocumentationReview} />


        <RouteWrapper exact layout={ChildLayoutNew} path="/work-with-aaziko" component={WorkWithAaziko} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/integrity" component={Integrity} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/company-contact-us" component={ContactUsNew} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/carriers" component={Carriers} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/sasas" component={HomeNew} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/importer-exporter" component={ImporterExporter} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/help-center" component={HelpCenter} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/logistic-map" component={LogisticMap} />{" "}
        <RouteWrapper exact layout={ChildLayoutNew} path="/container-dimensions" component={ContainerDimensions} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/container-dimensions-details" component={ContainerDimensionsDetails} />{" "}
        <RouteWrapper exact layout={ChildLayoutNew} path="/pallet-dimensions" component={PalletDimensions} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/uld-container-types" component={UldContainerTypes} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/certification" component={Certification} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/auditing-and-compliance" component={AuditingandCompliance} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/incoterms" component={Incoterms} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/imo-classes" component={ImoClasses} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/parameter-sea-containers" component={ParameterSeaContainers} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/types-railway-wagons" component={TypesRailwayWagons} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/vessel-types" component={VesselTypes} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/vessel-parameter-sea-container" component={VesselParameterSeaContainers} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/truck-types" component={TruckTypes} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/truck-types-parameter" component={TruckTypesParameter} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/reefer-cargo" component={ReeferCargo} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/freight-shipping" component={FreightShipping} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/liner-terms" component={Linerterms} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/services-fees" component={ServicesFees} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/unit-converter" component={UnitConverter} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/demurrage-storage-calculator" component={DemurrageStorageCalculator} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/shipping-lines" component={ShippingLines} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/learn-more" component={LearnMore} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/press-room" component={PressRoom} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/customs-tariffs" component={CustomsTariffs} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/trade-remedies" component={TradeRemedies} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/regulatory-requirements" component={RegulatoryRequirements} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/compare-competitor" component={CompareCompetitor} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/hs-code" component={HSCode} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/compare-product" component={CompareProduct} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/insurance" component={Insurance} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/lsq" component={LSQ} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/world-sea-port" component={WorldSeaPort} />
        <RouteWrapper exact layout={ChildLayoutNew2} path="/customs-easy" component={CustomsEasy} />
        <RouteWrapper exact layout={ChildLayoutNew2} path="/customs-2" component={Customs2} />
        <RouteWrapper exact layout={ChildLayoutNew} path="/trade-agreement" component={TradeAgreement} />
      </Router>
    </>
  );
}
