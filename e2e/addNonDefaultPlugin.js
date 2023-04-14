document.addEventListener('DOMContentLoaded', () => {
  const openmct = window.openmct;
  openmct.install(openmct.plugins.example.ExampleFaultSource(true));
});
