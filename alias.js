const aliasData = [
    // --- Categoria: Magias do Harry Potter ---
    { categoria: 'Harry Potter', alias: 'lumos', comando: 'ls -h' },
    { categoria: 'Harry Potter', alias: 'revelio', comando: 'ls -l -h' },
    { categoria: 'Harry Potter', alias: 'reveliomaxima', comando: 'ls -h -l -a' },
    { categoria: 'Harry Potter', alias: 'alohomora', comando: 'open .' },
    { categoria: 'Harry Potter', alias: 'avadakedavra', comando: 'sudo shutdown -h now' },
    { categoria: 'Harry Potter', alias: 'bombarda', comando: 'sudo shutdown -r now' }, // Reinicia o sistema
    { categoria: 'Harry Potter', alias: 'protego', comando: 'echo "~~* Protego! (Trancando a tela...) *~~"; "/System/Library/CoreServices/Menu Extras/User.menu/Contents/Resources/CGSession" -suspend' },

    // --- Categoria: Português / Úteis ---
    { categoria: 'Português', alias: 'ir', comando: 'cd' },
    { categoria: 'Português', alias: 'lista', comando: 'ls -h' },
    { categoria: 'Português', alias: 'listar', comando: 'ls -h' },
    { categoria: 'Português', alias: 'raiz', comando: 'cd /' },
    { categoria: 'Português', alias: 'voltar', comando: 'cd ..' },
    { categoria: 'Português', alias: 'file', comando: 'open .' },
    { categoria: 'Português', alias: 'files', comando: 'open .' },
    { categoria: 'Português', alias: 'explorar', comando: 'open .' },
    { categoria: 'Português', alias: 'subl', comando: 'open -a "Sublime Text"' },
    { categoria: 'Português', alias: 'alteraralias', comando: 'open -a "Sublime Text" ~/.zshrc' }, // Para macOS (zsh). Se usar bash, troque para ~/.bash_profile
    { categoria: 'Português', alias: 'salvaralias', comando: 'source ~/.zshrc' }, // Para macOS (zsh). Se usar bash, troque para ~/.bash_profile

    // --- Categoria: Sistema de Repositories ---
    { categoria: 'Projetos', alias: 'mennuv', comando: 'cd ~/Repositories/mennuv-pasta && ls' },
    { categoria: 'Projetos', alias: 'menu', comando: 'cd ~/Repositories/mennuv-pasta && ls' },
    { categoria: 'Projetos', alias: 'mennu', comando: 'cd ~/Repositories/mennuv-pasta && ls' },
    { categoria: 'Projetos', alias: 'meuweb', comando: 'cd ~/Repositories/meuwebsite-pasta && ls' },
    { categoria: 'Projetos', alias: 'meuwebsite', comando: 'cd ~/Repositories/meuwebsite-pasta && ls' },
    { categoria: 'Projetos', alias: 'outros', comando: 'cd ~/Repositories/outros-pasta && ls' },
    { categoria: 'Projetos', alias: 'outrosprojetos', comando: 'cd ~/Repositories/outros-pasta && ls' },

    // --- Categoria: Git & GitHub ---
    {
        categoria: 'Git',
        alias: 'gitaccio',
        comando: 'echo "~~*~~"; echo "~~* Accio! (Trazendo atualizações...) *~~"; git pull; echo "===> *Atenção* Digite sua senha se necessário <==="; echo "~~* Git Status *~~"; git status; echo "~~*~~"'
    },
    {
        categoria: 'Git',
        alias: 'gitlumos',
        comando: 'echo "~~*~~"; echo "~~* Lumos! (Listando branches...) *~~"; git branch -a; echo "~~* Bom trabalho! *~~"'
    },
    {
        categoria: 'Git',
        alias: 'gitfinito',
        comando: 'echo "~~*~~"; echo "~~* Finito! (Git Add + Commit) *~~"; git add .; echo "===> *Atenção* O editor abrirá para sua mensagem <==="; git commit; echo "~~* Código Finalizado! *~~"; echo "~~*~~"'
    },
    {
        categoria: 'Git',
        alias: 'gitascendio',
        comando: 'echo "~~*~~"; echo "~~* Ascendio! (Enviando para o remoto...) *~~"; git push; echo "~~*~~"; echo "~~* Código nas nuvens! *~~"; echo "~~*~~"'
    }
];

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = aliasData;
}