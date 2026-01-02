export default function ProductCard() {
    return (
        <div className="bg-app-bg text-app-text min-h-screen p-8">
            <div className="bg-app-surface p-6 rounded-lg shadow-md">
                <h1 className="text-app-primary text-2xl font-bold">Título Primário</h1>
                <p className="mt-2">Este é um exemplo de card usando sua paleta.</p>
                <button className="mt-4 bg-app-primary text-app-bg px-4 py-2 rounded">
                Botão de Ação
                </button>
            </div>
        </div>
    )
}