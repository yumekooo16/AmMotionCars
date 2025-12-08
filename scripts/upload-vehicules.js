import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY // Utilisez la service_role key pour le script
);

async function uploadVehicules() {
  // Lister toutes les images du bucket
  const { data: files, error } = await supabase.storage
    .from('tarifs-images')
    .list('', {
      limit: 1000,
      offset: 0,
      sortBy: { column: 'name', order: 'asc' }
    });

  if (error) {
    console.error('Erreur:', error);
    return;
  }

  // Pour chaque dossier (marque)
  for (const folder of files.filter(f => f.id)) {
    const marque = folder.name;
    
    // Lister les images dans ce dossier
    const { data: images } = await supabase.storage
      .from('tarifs-images')
      .list(marque);

    for (const image of images || []) {
      if (image.name.includes('flyer')) continue; // Ignorer les flyers
      
      const publicURL = supabase.storage
        .from('tarifs-images')
        .getPublicUrl(`${marque}/${image.name}`).data.publicUrl;

      // Nom du véhicule depuis le nom du fichier
      const nom = image.name
        .replace('.webp', '')
        .replace('.jpg', '')
        .replace('.png', '')
        .replace(/-/g, ' ')
        .split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');

      // Insérer dans la base
      const { error: insertError } = await supabase
        .from('vehicules')
        .insert({
          marque: marque.toLowerCase(),
          nom: nom,
          image_url: publicURL
        });

      if (insertError) {
        console.error(`Erreur insertion ${nom}:`, insertError);
      } else {
        console.log(`✅ ${nom} ajouté`);
      }
    }
  }
}

uploadVehicules();