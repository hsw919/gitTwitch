$(document).ready(function(){
	var users = ['freecodecamp', 'TimTheTatman', 'a_seagull', 'kixstar', 'macie_jay', 'surefour', 'phizzurp', 'nadeshot'];

	users.forEach(function(channel){
		$.ajax({
			type: 'GET',
			url: 'https://api.twitch.tv/kraken/streams/' + channel,
			headers: {
				'Client-ID': 'fxvrcedg6ie1yftu1j8wuyzmtlyafe'
			},
			success: function(data){
				if(data.stream === null){
					$.ajax({
						type: 'GET',
						url: 'https://api.twitch.tv/kraken/channels/' + channel,
						headers: {
							'Client-ID': 'fxvrcedg6ie1yftu1j8wuyzmtlyafe'
						},
						success: function(data2){
							$('.main').append('<li><a target="_blank" href="'+data2.url+'"><span class="logo"><img src="' + data2.logo + '"></span><span class="name">'+ data2.display_name + '</span>'+ '<span class="status">Offline</span>' +'</a></li>');
						}
					});
				} else {
					$('.main').append('<li><a target="_blank" href="'+data.stream.channel.url+'"><span class="logo"><img src="' + data.stream.channel.logo + '"></span><span class="name">'+ data.stream.channel.display_name + '</span>'+ '<span class="status">' + data.stream.channel.status +'</span>' +'</a></li>');
				}
			}
		});
	});
});












// $(document).ready(function(){
// 	var users = ['freecodecamp', 'timthetatman', 'a_seagull', 'kixstar', 'macie_jay', 'surefour', 'phizzurp', 'nadeshot'];

// 	users.forEach(function(channel){
// 		$.ajax({
// 		type: 'GET',
// 		url: 'https://api.twitch.tv/kraken/streams/' + channel,
// 		headers: {
// 			'Client-ID': 'fxvrcedg6ie1yftu1j8wuyzmtlyafe'
// 		},
// 		success: function(data){
// 			if(data.stream == null){
// 				$.ajax({
// 				type: 'GET',
// 				url: 'https://api.twitch.tv/kraken/streams/' + channel,
// 				headers: {
// 					'Client-ID': 'fxvrcedg6ie1yftu1j8wuyzmtlyafe'
// 				},
// 				success: function(data2){
// 					$('.stream').append('<a href="' + data2.url + '">')
// 				} 
// 			}); 
// 		}
// 	}
// 	});
// });



























// $(document).ready(function(){
// 	var users = ['freecodecamp', 'timthetatman', 'a_seagull', 'kixstar', 'macie_jay', 'surefour', 'phizzurp', 'nadeshot'];
// 	users.forEach(function(channel) {
// 		$.ajax({
// 			type: 'GET',
// 			url: 'https://api.twitch.tv/kraken/channels/' + channel,
// 			headers: {
// 				'Client-ID': 'fxvrcedg6ie1yftu1j8wuyzmtlyafe'
// 			},
// 			success: function(data){
// 				// console.log(data);
// 				$('.main').append('<li><a target="_blank" href="'+data.url+'"><span class="logo"><img src="' + data.logo + '"></span><span class="name">'+ data.name + '</span>'+ '<span class="status"></span>' +'</a></li>');

// 				$.ajax({
// 					type: 'GET',
// 					url: 'https://api.twitch.tv/kraken/streams/' + channel,
// 					headers: {
// 						'Client-ID': 'fxvrcedg6ie1yftu1j8wuyzmtlyafe'
// 					},
// 					success: function(data2){
// 						if (data2.stream === null) {
// 							$('.status').html('Offline');
// 						} else {
// 							$('.status').html('online');
// 						}
// 					}
// 				});
// 			}
// 	});	
// 		});

	// $.ajax({
	// 	type: 'GET',
	// 	url: 'https://api.twitch.tv/kraken/streams/',
	// 	headers: {
	// 		'Client-ID': 'fxvrcedg6ie1yftu1j8wuyzmtlyafe'
	// 	},
	// 	success: function(data){
	// 		console.log(data);
	// 	}
	// });









// 	$('button').click(function(){
// 		$('button').siblings().removeClass('selected');
// 		$(this).addClass('selected');
// 	});
// });