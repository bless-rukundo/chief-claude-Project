import chefClaudeLogo from "../chief-claude-logo.png"

export default function Header() {
    return (
        <header className="flex justify-center">
            <img src={chefClaudeLogo} w-4/>
            <h1 className="text-xl">Chef Claude</h1>
        </header>
    )
}