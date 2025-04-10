import type { OGPDataInitial } from '@/config/initials'

type CodeString = {
  [key: string]: (data: OGPDataInitial) => string
}
type StyleString = {
  [key: string]: string
}

export const codeStrings: CodeString = {
  A: data => {
    const { title, description, image, favicon, hostname, link } = data
    return `
<a href="${link}" class="card" target="_blank" rel="noopener noreferrer">
  <div class="card-group">
    <div class="card-image-container">
      <img src="${image}" alt="${title}" class="card-image" />
    </div>
    <div class="card-content">
      <div>
        <h3 class="card-title">${title}</h3>
        <p class="card-description">${description}</p>
      </div>
      <div class="card-footer">
        <img src="${favicon}" alt="favicon" class="favicon" />
        <span>${hostname}</span>
      </div>
    </div>
  </div>
</a>`
  },
}
export const styleStrings: StyleString = {
  A: `
.card{position:relative;display:block;width:100%;overflow:hidden;border-radius:1rem;border:1px solid #e5e7eb;background-color:white;box-shadow:0 1px 3px rgba(0,0,0,.1);transition:box-shadow .3s ease;max-width:400px}
.card:hover{box-shadow:0 10px 25px rgba(0,0,0,.1)}
.card-group{display:flex;flex-direction:column}
.card-image-container{position:relative;width:100%;height:12rem;overflow:hidden}
.card-image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .3s ease-in-out}
.card:hover .card-image{transform:scale(1.05)}
.card-content{padding:1.25rem;display:flex;flex-direction:column;justify-content:space-between;width:100%}
.card-title{font-size:1.25rem;font-weight:600;color:#111827;line-height:1.375;transition:color .3s}
.card:hover .card-title{color:#2563eb}
.card-description{margin-top:.5rem;font-size:.875rem;color:#4b5563;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.card-footer{margin-top:1rem;font-size:.75rem;color:#9ca3af;display:flex;align-items:center;gap:.5rem}
.favicon{width:1.25rem;height:1.25rem;}
@media(min-width:640px){.card{max-width:800px}.card-group{flex-direction:row}.card-image-container{width:33.333%;height:auto}.card-content{width:66.666%}}
`,
}
