import threeSecrets from '../assets/portfolio/3secrets.png';
import blockchainvis from '../assets/portfolio/bvis.jpg';
import dsignthis from '../assets/portfolio/dSign2.png';
import ethereumDataChannel from '../assets/portfolio/edc.png';
import filmToSee from '../assets/portfolio/filmtosee.png';
import hashtagRecommender from '../assets/portfolio/scala.png';
import human2simpson from '../assets/portfolio/sim.png';
import pig from '../assets/portfolio/StateChannel.png';
import rhadapay from '../assets/portfolio/rhada.jpg';
import snafu from '../assets/portfolio/snafu.PNG';
import universalplot from '../assets/portfolio/math.png';
import erc721 from '../assets/portfolio/nft.png';

const projectMedia = {
  '3secrets': {
    image: threeSecrets,
    alt: 'Screenshot of the 3 Secrets companion app.',
  },
  blockchainvis: {
    image: blockchainvis,
    alt: 'Screenshot of the Blockchainvis transaction graph visualization.',
  },
  dsignthis: {
    image: dsignthis,
    alt: 'Screenshot of the dSignThis petition interface.',
  },
  'erc721-token': {
    image: erc721,
    alt: 'Screenshot of the ERC721 authenticity token project.',
  },
  'ethereum-data-channel': {
    image: ethereumDataChannel,
    alt: 'Screenshot of the Ethereum Data Channel project.',
  },
  'film-to-see': {
    image: filmToSee,
    alt: 'Screenshot of the Film To See Android app.',
  },
  'hashtag-recommender': {
    image: hashtagRecommender,
    alt: 'Screenshot of the scalable hashtag recommender project.',
  },
  human2simpson: {
    image: human2simpson,
    alt: 'Screenshot showing Human2Simpson image translation results.',
  },
  'pig-blockchain-game': {
    image: pig,
    alt: 'Screenshot of the Pig blockchain state channel game.',
  },
  rhadapay: {
    image: rhadapay,
    alt: 'Presentation slide for RhadaPay.',
  },
  'snafu-collective': {
    image: snafu,
    alt: 'Screenshot of the Snafu Collective marketplace.',
  },
  universalplot: {
    image: universalplot,
    alt: 'Screenshot of the UniversalPlot sonification project.',
  },
} as const;

export function getProjectMedia(slug: string) {
  return projectMedia[slug as keyof typeof projectMedia];
}
