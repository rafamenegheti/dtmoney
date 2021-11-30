import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'


export function Summary() {
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={ incomeImg } alt="icone entrada de dinheiro" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={ outcomeImg } alt="icone entrada de dinheiro" />
                </header>
                <strong>- R$ 500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Saldo</p>
                    <img src={ totalImg } alt="icone saldo de dinheiro" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    );

};