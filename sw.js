const CACHE_NAME = 'jogo-v1';
const ARQUIVOS = [
  './',
    './index.html',
      './style.css',
        './script.js'
        ];

        // Instala o aplicativo no celular e guarda os arquivos básicos
        self.addEventListener('install', (evento) => {
          evento.waitUntil(
              caches.open(CACHE_NAME).then((cache) => cache.addAll(ARQUIVOS))
                );
                });

                // Controla as requisições para o app carregar instantaneamente
                self.addEventListener('fetch', (evento) => {
                  evento.respondWith(
                      caches.match(evento.request).then((resposta) => resposta || fetch(evento.request))
                        );
                        });