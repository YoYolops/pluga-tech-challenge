import "./Header.css";
import SearchBar from "../SearchBar";

export default function Header() {
    return (
        <header className="main_header">
            <main className="presentation">
                <div className="pluga_alltype"></div>
                <div>     
                    <h1>Elimine tarefas manuais e chatas da sua empresa.</h1>
                    <h2>Faça integrações incríveis entre as ferramentas web que você mais usa. E o melhor: sem escrever uma única linha de código.</h2>
                </div>
            </main>
            <SearchBar />
        </header>
    )
}