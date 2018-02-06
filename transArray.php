<?

$step1Arry = array (
	'Ú'=>':',
	'ˆ'=>'N',
	'Í'=>'vY',
	'vYY'=>'vY',
	'Œ'=>'œ',
	'†'=>'t',
	'ey'=>'e'
	);

$step2Arry = array (
        '!'=>'!',
        '"'=>'"',
        '#'=>'#',
        '$'=>'$',
        '%'=>'%',
        '&'=>'ph',
        "'"=>"'",
        '('=>'(',
        ')'=>')',
        '*'=>'*',
        '+'=>'+',
        ','=>',',
        '-'=>'-',
        '.'=>'.',
        '/'=>'/',
        '0'=>'0',
        '1'=>'1',
        '2'=>'2',
        '3'=>'3',
        '4'=>'4',
        '5'=>'5',
        '6'=>'6',
        '7'=>'7',
        '8'=>'8',
        '9'=>'9',
        ':'=>':',
        ';'=>';',
        '<'=>'ik',
        '='=>'=',
        '>'=>'Oankaar',
        '?'=>'?',
        '@'=>'h',
        'A'=>'a',
        'B'=>'bh',
        'C'=>'chh',
        'D'=>'dh',
        'E'=>'o',
        'F'=>'dd',
        'G'=>'gh',
        'H'=>'h',
        'I'=>'ee',
        'J'=>'jh',
        'K'=>'kh',
        'L'=>'l',
        'M'=>'(n)',
        'N'=>'(n)',
        'O'=>'au',
        'P'=>'f',
        'Q'=>'thh',
        'R'=>'r',
        'S'=>'sh',
        'T'=>'tt',
        'U'=>'oo',
        'V'=>'R',
        'W'=>'aa(n)',
        'X'=>'y',
        'Y'=>'ai',
        'Z'=>'g(h)',
        '['=>'|',
        '\\'=>'n(j)',
        ']'=>'||',
        '^'=>'kh',
        '_'=>'_',
        '`'=>'',
        'a'=>'u',
        'b'=>'b',
        'c'=>'ch',
        'd'=>'dh',
        'e'=>'e',
        'f'=>'dd',
        'g'=>'g',
        'h'=>'h',
	'i'=>'i',
        '*'=>'i',
        'j'=>'j',
        'k'=>'k',
        'l'=>'l',
        'm'=>'m',
        'n'=>'n',
        'o'=>'o',
        'p'=>'p',
        'q'=>'t',
        'r'=>'r',
        's'=>'s',
        't'=>'tt',
        'u'=>'u',
        'v'=>'v',
        'w'=>'aa',
        'x'=>'nn',
        'y'=>'ay',
        'z'=>'z',
        '{'=>'{',
        '|'=>'n(g)',
        '}'=>'}',
        '~'=>'’, ',
        '¡'=>'ikOankaar ',
        '¢'=>'¢',
        '£'=>'£',
        '¤'=>'',
        '¥'=>'¥',
        '§'=>'hoo',
        '¨'=>'oo',
        'ª'=>'',
        '®'=>'r',
        '°'=>'',
        '±'=>'±',
        '´'=>'ye',
        'µ'=>'(n)',
        '¶'=>'¶',
        '·'=>'·',
        '¿'=>'x',
        'Å'=>'ik',
        'Æ'=>'Oankaar',
        'Ç'=>'',
        'Í'=>'vY',
        'Î'=>'y',
        'Ï'=>'y',
        'Ò'=>'||',
        'Ó'=>'',
        'Ô'=>'',
        'Ø'=>'',
        'Ú'=>':',
        'å'=>'Oankaar',
        'æ'=>'',
        'ç'=>'ch',
        'ü'=>'u',
        'Œ'=>'',
        'œ'=>'t',
        'ƒ'=>'noo(n)',
        'ˆ'=>'(n)',
        '˜'=>'n',
        'µ'=>'n',
        '/'=>'-',
        '–'=>'–',
        '—'=>'—',
        '‘'=>"'",
        '’'=>"'",
        '‚'=>'',
        '“'=>'"',
        '”'=>'"',
        '†'=>'T',
        '•'=>'•',
        '…'=>'…',
        '‰'=>'',
        '·'=>'·',
	);

$step4Arry = array(
//        'n '=>'na ',
//        't '=>'ta ',
        '(N)'=>'n',
        'ah '=>'eh ',
        'eee'=>'e\'ee',
        'uu'=>'au',
        'Aih'=>'ahai'
	);

$step5Arry = array(
        'aaa'=>'aa',
        'ii'=>'i',
        'eay'=>'ey',
        'jIA'=>'jee',
        'a\'eh'=>'eh',
	'u '=>' '
	);

function splitarry ($arry)
{
	$keys = array();
	$values = array();
	foreach($arry as $k => $v)
	{
		$keys[] = $k;
		$values[] = $v;
	}
	return array($keys,$values);
}

$step1Arry = splitarry($step1Arry);
$step2Arry = splitarry($step2Arry);
$step4Arry = splitarry($step4Arry);
$step5Arry = splitarry($step5Arry);

print 'var step1Keys = ' . json_encode($step1Arry[0]) . ";\n";
print 'var step1Values = ' . json_encode($step1Arry[1]) . ";\n";
print 'var step2Keys = ' . json_encode($step2Arry[0]) . ";\n";
print 'var step2Values = ' . json_encode($step2Arry[1]) . ";\n";
print 'var step4Keys = ' . json_encode($step4Arry[0]) . ";\n";
print 'var step4Values = ' . json_encode($step4Arry[1]) . ";\n";
print 'var step5Keys = ' . json_encode($step5Arry[0]) . ";\n";
print 'var step5Values = ' . json_encode($step5Arry[1]) . ";\n";
?>
