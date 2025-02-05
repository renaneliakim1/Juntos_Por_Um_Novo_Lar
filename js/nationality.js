const nacionalidades = [
    "Afegã", "Africana", "Albanesa", "Alemã", "Andorrana", "Angolana", "Antiguana e barbudana", 
    "Argelina", "Argentina", "Armênia", "Australiana", "Austríaca", "Azerbaijana", "Bahamense", 
    "Bangladesiana", "Barbadiana", "Barenita", "Bielorrussa", "Birmanesa", "Boliviana", "Bosníaca", 
    "Botswana", "Bruneana", "Búlgara", "Burquina-fasiana", "Burundinesa", "Butanesa", "Cabo-verdiana", 
    "Cambojana", "Camaronesa", "Canadense", "Catariana", "Cazaque", "Chinesa", "Chipriota", "Colombiana", 
    "Comoriana", "Congo", "Costa-riquenha", "Croata", "Cubana", "Curaçauense", "Chipriota", "Dinamarquesa", 
    "Dominicana", "Ecuatoriana", "Egípcia", "Emiratense", "Equatoriana", "Eslovaca", "Eslovena", "Española", 
    "Estoniana", "Eslovaca", "Etíope", "Fidjiana", "Filipina", "Finlandesa", "Francesa", "Gabonense", "Gambiana", 
    "Gandiana", "Georgiana", "Ghaniana", "Grega", "Granadina", "Guatemalteca", "Guineana", "Guineense", "Guineense", 
    "Haitiana", "Hondurenha", "Húngara", "Iemenita", "Indianense", "Indonésia", "Iraquiana", "Irlandesa", "Islândia", 
    "Israeli", "Italiana", "Jamaicana", "Japonesa", "Jordana", "Kuwaitiana", "Laosiana", "Latvia", "Libanesa", 
    "Liberiana", "Lituana", "Luxemburguesa", "Macedônia", "Madagascariana", "Malawiana", "Malásia", "Maldivas", 
    "Mali", "Maltesa", "Mauriciana", "Mauritana", "Mexicana", "Mianmarense", "Mocambicana", "Moldava", "Monaco", 
    "Mongol", "Mozambicana", "Namíbia", "Nepalesa", "Nicaraguense", "Níger", "Nigeriana", "Norueguesa", "Nova-zelandesa", 
    "Nuaquen", "Panamenha", "Paquistanesa", "Paraguaia", "Peruana", "Polonesa", "Portuguesa", "Quênia", "Quirguistão", 
    "Romena", "Ruandesa", "Russa", "Samoana", "Santomense", "Senegalesa", "Serbia", "Síria", "Somali", "Sul-africana", 
    "Sueca", "Suíça", "Surinamesa", "Tailandesa", "Taiwanesa", "Tanzaniana", "Tcheca", "Togolesa", "Tailandesa", 
    "Tunisiana", "Turca", "Ucraniana", "Uruguaia", "Venezuelana", "Vietnã", "Yemenita", "Zambiana", "Zimbabuana"
];

const inputElement = document.getElementById('nacionalidadeInput');
const datalistElement = document.getElementById('nacionalidades');

inputElement.addEventListener('input', function() {
    const query = inputElement.value.toLowerCase();
    const filteredNacionalidades = nacionalidades.filter(n => n.toLowerCase().includes(query)); 
    datalistElement.innerHTML = '';
    filteredNacionalidades.forEach(function(nacionalidade) {
        const option = document.createElement('option');
        option.value = nacionalidade;
        datalistElement.appendChild(option);
    });
});
