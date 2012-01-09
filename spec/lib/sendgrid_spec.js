describe('Sendgrid', function() {
    var transport
      , sg;
    beforeEach(function() {
        transport = new Http('isaac@sendgrid.com', 'testing');
        sg = new Sendgrid(transport);
    });

    it('should', function() {
        transport.username.should.equal('isaac@sendgrid.com');
        transport.password.should.equal('testing');
    });

    it('should store the to addresses', function() {
        sg.addTo('example@example.com')
        sg.getTo().should.eql(["example@example.com"]);
    });

    it('should allow multiple to addresses', function() {
        sg.addTo(['example1@example.com', 'example2@example.com']);
        sg.getTo().should.eql(["example1@example.com","example2@example.com"]);
    });

    it('should allow for names along with emails', function() {
        sg.addTo({'example3@example.com': 'name 3', 'example4@example.com': 'name 4'});
        sg.getTo().should.eql(["example3@example.com","example4@example.com"]);
        sg.getToName().should.eql(['name 3', 'name 4']);
    });

    it('should throw an exception when bcc is enabled and the email is missing', function() {
        should.fail(function() { sg.enableBcc({test: 1}) })
    });
});
