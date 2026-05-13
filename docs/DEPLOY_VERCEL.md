# Deploy en Vercel

El proyecto está pensado para correr en Vercel, pero funciona en cualquier
plataforma compatible con Next.js 14 (App Router).

## 1. Preparar el repositorio

1. Subí el proyecto a un repo de GitHub.
2. Asegurate de que el branch principal compile localmente:

   ```bash
   npm run typecheck
   npm run lint
   npm test
   npm run build
   ```

## 2. Crear el proyecto en Vercel

1. Iniciá sesión en https://vercel.com
2. New Project → importá el repo de GitHub.
3. Framework Preset: **Next.js** (autodetectado).
4. Root directory: `./`
5. Build Command: `next build` (default)
6. Output: `.next` (default)

## 3. Configurar variables de entorno

Desde Vercel → Project → Settings → Environment Variables, agregá:

| Nombre                            | Valor sugerido                              |
| --------------------------------- | ------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`            | `https://tudominio.com` (sin barra final)   |
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID`   | vacío hasta tener aprobación de AdSense     |
| `NEXT_PUBLIC_ANALYTICS_PROVIDER`  | `none`                                       |
| `NEXT_PUBLIC_GA_ID`               | opcional                                    |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`    | opcional                                    |

Aplicalas en los 3 entornos (Production, Preview, Development) según corresponda.

## 4. Dominio

1. Settings → Domains → Add Domain.
2. Apuntá tu dominio con los registros DNS que indique Vercel.
3. Esperá la propagación (puede tardar minutos u horas).

## 5. Sitemap y Search Console

1. Verificá que `https://tudominio.com/sitemap.xml` cargue correctamente.
2. Seguí los pasos en `docs/SEARCH_CONSOLE.md` para enviarlo a Google.

## 6. AdSense

Cuando AdSense apruebe el sitio:

1. Actualizá `NEXT_PUBLIC_ADSENSE_CLIENT_ID` en Vercel.
2. Redeployá (Vercel suele hacerlo automático al cambiar variables).
3. Ajustá los `slot` reales en `<AdSlot slot="..." />` según los bloques creados
   en AdSense.

## 7. Checklist previo al deploy

- [ ] `npm run build` pasa localmente.
- [ ] `NEXT_PUBLIC_SITE_URL` apunta al dominio real.
- [ ] No hay datos sensibles en el código.
- [ ] Páginas legales revisadas.
- [ ] Sitemap responde 200.
- [ ] `robots.txt` permite indexar (`/robots.txt`).

## 8. Checklist post-deploy

- [ ] La home carga y se ve bien en mobile y desktop.
- [ ] Los 5 artículos de Autos responden.
- [ ] La calculadora calcula y resetea correctamente.
- [ ] Lighthouse mobile ≥ 85 (Performance, SEO, Accesibilidad, Best Practices).
- [ ] `sitemap.xml` y `robots.txt` accesibles.
- [ ] Search Console verifica la propiedad.

## 9. Rollback

Vercel mantiene historial de deploys. Para rollback rápido:

1. Project → Deployments.
2. Seleccioná el deploy anterior estable.
3. Click en `Promote to Production`.

## 10. Notas

- No commits con secretos: usar **siempre** variables de entorno de Vercel.
- No habilites integraciones automáticas con servicios pagos sin revisar costos.
