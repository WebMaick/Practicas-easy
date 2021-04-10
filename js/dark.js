const d = document;

export default function darkMode (btn, classDark) {
    d.addEventListener('click', (e) => {
        const $selecciones = d.querySelectorAll('[data-dark]'),
        $icono = d.querySelector(btn);
        let moon = "☪️",
        sun = '☀️';
         
        
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
            
            if($icono.textContent === moon){
                $icono.textContent = sun;
                $icono.style.color = "#ffff00";
            }else{
                $icono.textContent = moon;
                $icono.style.color = "#2f2f2f";
            }  

            $selecciones.forEach(element => {
                element.classList.toggle(classDark);
            });

        }
    })    
}