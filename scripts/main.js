
flowSVG.draw(SVG('drawing').size(600, 800));
flowSVG.config({
    interactive:true,
    showButtons:true,
    connectorLength: 60,
    scrollto:false
});
flowSVG.shapes(
  [{
    label:'procuraUBS',
    type:'process',
    text: [
      'Paciente procura UBS'
    ],
    next: 'entradaUBS'
  },
  {
      label: 'entradaUBS',
      type: 'process',
      text: [
        'UBS como porta de entrada resolutiva, de identificação precoce e encaminhamento correto de casos graves.',
        'Pacientes com prioridade no atendimento: pessoas acima de 60 anos, pacientes com doenças crônicas e/ou imunossuprimidos,',
        'gestantes e puérperas até 45 dias após o parto.'
    ],
    next: 'PrimeiroContato'
  },
  {
      label: 'PrimeiroContato',
      type: 'process',
      text: 'Primeiro Contato',
      next: 'acs'
  }
]);
