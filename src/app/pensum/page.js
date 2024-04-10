"use client";

function Pensum() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4">Plan de Estudio</h1>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="mb-4 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Semestre {i + 1}</h2>
          <div className="border rounded-lg overflow-hidden">
            {[...Array(5)].map((_, j) => (
              <div key={j} className="border-b last:border-b-0 p-2">
                <h3 className="font-medium">Curso {j + 1}</h3>
                <p className="text-sm text-gray-500">
                  Descripción del curso {j + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Pensum;
