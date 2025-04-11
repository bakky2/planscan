import React from "react";

export default function PlanScanDemo() {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>PlanScan - Démonstration Web</h1>

      <div style={{ margin: "2rem 0", border: "1px solid #ccc", padding: "1rem" }}>
        <h2>Analyse des plans</h2>
        <img src="/analysis.jpg" alt="Analyse des plans" style={{ width: "100%", borderRadius: "8px" }} />
        <p>Implémentation du programme d’analyse de plans/coupes</p>
      </div>

      <div style={{ margin: "2rem 0", border: "1px solid #ccc", padding: "1rem" }}>
        <h2>Interface utilisateur</h2>
        <img src="/ui-design.jpg" alt="Interface utilisateur" style={{ width: "100%", borderRadius: "8px" }} />
        <p>Conception de l’interface utilisateur</p>
      </div>

      <div style={{ margin: "2rem 0", border: "1px solid #ccc", padding: "1rem" }}>
        <h2>Auto-contrôle</h2>
        <img src="/selfcheck.jpg" alt="Auto-contrôle chantier" style={{ width: "100%", borderRadius: "8px" }} />
        <p>Interface d’auto-contrôle par le chef de chantier</p>
      </div>

      <div style={{ margin: "2rem 0", border: "1px solid #ccc", padding: "1rem" }}>
        <h2>Conversion inventaire → commande</h2>
        <img src="/conversion.jpg" alt="Conversion inventaire" style={{ width: "100%", borderRadius: "8px" }} />
        <p>Algorithme de conversion d’un inventaire en bon de commande</p>
      </div>

      <div style={{ margin: "2rem 0", border: "1px solid #ccc", padding: "1rem" }}>
        <h2>Envoi direct</h2>
        <img src="/sending.jpg" alt="Envoi direct fournisseur" style={{ width: "100%", borderRadius: "8px" }} />
        <p>Envoi direct du bon de commande aux fournisseurs</p>
      </div>

      <div style={{ margin: "2rem 0", border: "1px solid #ccc", padding: "1rem" }}>
        <h2>Tutoriel</h2>
        <img src="/tutorial.jpg" alt="Tutoriel utilisateur" style={{ width: "100%", borderRadius: "8px" }} />
        <p>Mini-tutoriel pour aider les chefs de chantier à utiliser la plateforme</p>
      </div>
    </div>
  );
}
