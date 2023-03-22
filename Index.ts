import { Casino } from "./Casino";
import { Juegos } from "./Juegos";
import { Bacara } from "./Bacara";
import { Ruleta } from "./Ruleta";


const ruleta = new Ruleta('Ruleta', 'esquina jugador', 800 );
const bacara = new Bacara('Bacara', 'centro jugador',  5000);

const casino = new Casino('Treboles ', 'corazon y diamantes' )
casino.setCasinoJeux(ruleta);
casino.setCasinoJeux(bacara);

casino.getInf(); 