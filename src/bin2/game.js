const { playerFieldUi } = require("../modules/playerDom")
const { drawCanvas } = require("./domevents")

export function htmlStructure() {
  return (document.body.innerHTML = `

    <Header class="flex items-center max-w-7xl  w-full mx-auto mt-10 mb-4" >
        <h1 id="Logo" class="text-2xl mr-5">Kiz BattleShip </h1>
        <div class="screen flex px-4 py-3 bg-gray-200 text-sm max-w-xl w-full rounded-md">
            <p>Start editing to see some magic happen </p>
        </div>
    </Header>
    
    <main id="body-container" class=" flex max-xl mx-auto max-w-7xl w-full h-full mt-12">
        
        <div id="battlefield-2" class="hidden board w-1/2">
            <canvas id="computerboard" class="" width="360" height="360"></canvas>
        </div>

    </main>


    <footer class=" max-w-7xl w-full mx-auto py-1">
        <p class="text-center text-sm">
           
            <a href="#"><i class="fa-brands fa-github"></i> Kizzylion</a>
        </p>
    </footer>

    `)
}
