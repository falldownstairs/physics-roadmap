const fs = require('fs');
const path = require('path');

function restructureLessons(coursePath) {
  console.log(`\n📁 Processing course folder: ${coursePath}`);
  
  const items = fs.readdirSync(coursePath, { withFileTypes: true });
  
  items.forEach(item => {
    const itemPath = path.join(coursePath, item.name);
    
    if (item.isFile() && item.name.endsWith('.js') && !isNaN(item.name.split('.')[0])) {
      // This is a root-level lesson file (e.g., 0.js, 1.js)
      const lessonNumber = item.name.split('.')[0];
      const newFolderPath = path.join(coursePath, lessonNumber);
      const newFilePath = path.join(newFolderPath, item.name);
      
      console.log(`  Moving ${item.name} -> ${lessonNumber}/${item.name}`);
      
      // Create folder and move file
      if (!fs.existsSync(newFolderPath)) {
        fs.mkdirSync(newFolderPath);
      }
      fs.renameSync(itemPath, newFilePath);
      
    } else if (item.isDirectory() && isNaN(item.name)) {
      // This is a topic subfolder
      console.log(`  Processing topic subfolder: ${item.name}`);
      const topicPath = itemPath;
      const lessonFiles = fs.readdirSync(topicPath, { withFileTypes: true })
        .filter(file => file.isFile() && file.name.endsWith('.js'));
      
      lessonFiles.forEach(lessonFile => {
        const lessonNumber = lessonFile.name.split('.')[0];
        const oldFilePath = path.join(topicPath, lessonFile.name);
        const newFolderPath = path.join(topicPath, lessonNumber);
        const newFilePath = path.join(newFolderPath, lessonFile.name);
        
        console.log(`    Moving ${lessonFile.name} -> ${lessonNumber}/${lessonFile.name}`);
        
        // Create folder and move file
        if (!fs.existsSync(newFolderPath)) {
          fs.mkdirSync(newFolderPath);
        }
        fs.renameSync(oldFilePath, newFilePath);
      });
    }
  });
}

// Main execution
const dataPath = path.join(__dirname, '../data');

// Restructure mechanics
const mechanicsPath = path.join(dataPath, 'mechanics');
if (fs.existsSync(mechanicsPath)) {
  restructureLessons(mechanicsPath);
  console.log('\n✅ Mechanics lessons restructured successfully!');
}

// Restructure electricity-magnetism if it exists
const emPath = path.join(dataPath, 'electricity-magnetism');
if (fs.existsSync(emPath)) {
  restructureLessons(emPath);
  console.log('\n✅ Electricity-Magnetism lessons restructured successfully!');
}

console.log('\n🎉 All lessons have been restructured!\n');
