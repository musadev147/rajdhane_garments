const fs = require('fs');
const path = require('path');

const css = `
/* Floating Label Styles */
.form-input.floating-label {
  position: relative;
  display: flex;
  align-items: center;
}

.form-input.floating-label input, 
.form-input.floating-label select {
  padding-top: 20px;
  padding-bottom: 4px;
}

.form-input.floating-label label {
  position: absolute;
  left: 40px; /* Default for inputs with icons */
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  color: var(--text-muted);
  pointer-events: none;
  transition: all 0.2s ease-in-out;
  background: transparent;
  white-space: nowrap;
}

/* For inputs without icons */
.form-input.floating-label.no-icon label {
  left: 16px;
}

/* Floating state */
.form-input.floating-label input:focus ~ label,
.form-input.floating-label input:not(:placeholder-shown) ~ label,
.form-input.floating-label select:focus ~ label,
.form-input.floating-label select:not([value=""]) ~ label {
  top: 12px;
  font-size: 11px;
  color: var(--primary);
  font-weight: 600;
}
`;

let currentCSS = fs.readFileSync('src/form-styles.css', 'utf8');
if (!currentCSS.includes('.floating-label')) {
  fs.appendFileSync('src/form-styles.css', '\n' + css);
  console.log('Appended floating label CSS');
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Add floating-label class
  content = content.replace(/className="form-input(\s+[^"]*)?"/g, (match, p1) => {
    if (match.includes('floating-label')) return match;
    return `className="form-input floating-label${p1 || ''}"`;
  });

  // Extract placeholder and make it a label
  const inputRegex = /<input([^>]*)placeholder="([^"]+)"([^>]*)>/g;
  content = content.replace(inputRegex, (match, before, placeholder, after) => {
    if (placeholder === ' ' || placeholder === 'DD/MM/YYYY' || match.includes('type="date"')) {
       return match;
    }
    return `<input${before}placeholder=" "${after}>\n                <label>${placeholder}</label>`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

traverseDir(path.join(__dirname, 'src', 'pages'));
