let mails = ['test.email+alex@kavak.com',
  'test.e.mail+bob.cathy@kavak.com',
  'testemail+david@ka.vak.com'];

var numUniqueEmails = function (m) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(kavak.com)$/;

  if (regex.test(m)) {
    const x = m.substring(0, m.indexOf('@')).split('.').join(''),
          y = x.substr(0, (m.indexOf('+') - 1)).split('+').join('');

    return `${ y }${ m.substr( m.indexOf('@') ) }`;
  }
};

let allowed = mails.map((ma) => numUniqueEmails(ma)).filter((ma) => {
  if (ma) return ma;
});

console.log(allowed);
