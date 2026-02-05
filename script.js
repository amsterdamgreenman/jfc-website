const _supabase = supabase.createClient('https://wtyftavgeedogadlqpzr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0eWZ0YXZnZWVkb2dhZGxxcHpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxNTc2OTIsImV4cCI6MjA1MzczMzY5Mn0.qW7q-vL-YV0xU7r-XW8X-Z1X-YV0xU7r-XW8X-Z1X-YV0xU7r-XW8X-Z1X-Y');

function handleAction(cityName) { 
    if (event.target.innerText.includes('BOOK')) { 
        location.href = `deal-details.html?city=${cityName}`; 
    } else { 
        window.open('https://buy.stripe.com/test_7sY4gs9dMdPP31vfsi3oA02', '_blank'); 
    } 
}

async function login() { 
    await _supabase.auth.signInWithOAuth({ 
        provider: 'google', 
        options: { redirectTo: window.location.origin + window.location.pathname } 
    }); 
}

async function checkUser() {
    const { data: { user } } = await _supabase.auth.getUser();
    if (user) {
        document.querySelectorAll('.premium-blur').forEach(el => { el.style.filter = 'none'; el.style.opacity = '1'; });
        document.querySelectorAll('.unlock-btn').forEach(btn => { 
            btn.innerText = 'Book Now'; 
            btn.classList.replace('bg-blue-600', 'bg-green-600'); 
        });
        const authBtn = document.getElementById('auth-btn');
        if (authBtn) authBtn.innerText = "HI, " + user.user_metadata.full_name.split(' ')[0].toUpperCase();
    }
}

checkUser();
