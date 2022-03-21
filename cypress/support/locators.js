export const locators = {
  LOGIN: {
    USER: `[data-test="email"]`,
    PASSWORD: `[data-test="passwd"]`,
    BTN_LOGIN: `.btn`,
  },
  MENU: {
    HOME: `[href="/"]`,
    SETTINGS: `[data-test="menu-settings"]`,
    CONTAS: '[href="/contas"]',
    RESET: '[href="/reset"]',
    MOVIMENTACAO: "[data-test=menu-movimentacao]",
  },
  CONTAS: {
    NOME: `[data-test="nome"]`,
    BTN_SALVAR: `.btn`,
    XP_BTN_ALTERAR: `//table/td[contains(.,'Conta de teste')]/..//i[@class='far fa-edit']`,
  },
  MOVIMENTACAO: {
    DESCRICAO: '[data-test="descricao"]',
    VALOR: '[data-test="valor"]',
    INTERESSADO: '[data-test="envolvido"]',
    STATUS: '[data-test="status"]',
    EXTRATO: '[data-test="menu-extrato"]',
    BTN_SALVAR: ".btn-primary",
  },
  EXTRATO: {
    LINHAS: ".list-group > li",
    XP_BUSCA_ELEMENTO: `//span[contains(.,'Desc')]/following-sibling::small[contains(.,'123'))]`,
    FN_XP_REMOVER_ELEMENTO: (conta) =>
      `//span[contains(.,'${conta}')]/../../..//i[@class='far fa-trash-alt']`,
  },
  SALDO: {
    FN_XP_SALDO_CONTA: (nome) => `//td[contains(.,'${nome}')]/../td[2]`,
  },
  MESSAGE: ".toast-message",
};
