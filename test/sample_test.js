var test = require("tape");

test( "add", function(t){
    t.plan(2);

    t.equal( 2, 1+1 );
    t.equal( 3, 2+1 );
    t.end();
});
