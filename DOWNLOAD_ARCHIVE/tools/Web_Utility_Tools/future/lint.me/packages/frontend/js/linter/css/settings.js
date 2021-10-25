import mediate from 'matreshka/mediate';

const settings = {
    indentation: 4
};

// number of spaces or string (e. g. tab)
mediate(settings, 'indentation', ind => (isNaN(ind) ? ind : +ind));

export default settings;
