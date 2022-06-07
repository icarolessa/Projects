async function Deslogar(res){
    // apaga cookie do navegador
    res.clearCookie('Token');
    res.redirect('/');
}

module.exports = Deslogar;