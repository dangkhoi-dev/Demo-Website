import React, { useState } from 'react';

const Demo = () => {
    const [formData, setFormData] = useState({
        time: '',
        amount: '',
        v1: '',
        v2: '',
        v3: '',
        v4: '',
        v11: '',
        v12: '',
        v14: '',
        v17: ''
    });
    const [selectedModel, setSelectedModel] = useState('voting');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleModelChange = (e) => {
        setSelectedModel(e.target.value);
    };

    // Mock prediction based on model selection
    const predictWithModel = (modelType, data) => {
        // Simulate different model behaviors
        const models = {
            logistic: () => Math.random() > 0.3 ? 'fraud' : 'safe',
            randomForest: () => Math.random() > 0.25 ? 'fraud' : 'safe',
            decisionTree: () => Math.random() > 0.35 ? 'fraud' : 'safe',
            knn: () => Math.random() > 0.32 ? 'fraud' : 'safe',
            svm: () => Math.random() > 0.28 ? 'fraud' : 'safe',
            voting: () => Math.random() > 0.22 ? 'fraud' : 'safe' // Best model
        };
        
        return models[modelType]();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        
        // --- IMPORTANT: This is where you will call the API to backend ---
        // Example API call:
        // fetch('/api/predict', { 
        //   method: 'POST', 
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ ...formData, model: selectedModel })
        // })
        // .then(res => res.json())
        // .then(data => setResult(data.prediction));

        // --- Mock prediction for demo ---
        setTimeout(() => {
            const prediction = predictWithModel(selectedModel, formData);
            setResult({
                prediction,
                model: selectedModel,
                confidence: Math.random() * 0.3 + 0.7 // 70-100% confidence
            });
            setLoading(false);
        }, 1500);
    };

    return (
        <section id="demo" className="container">
            <h2>Model Testing</h2>
            <p className="demo-description">
                Test our trained models with transaction data. Select a model and enter the key features 
                to get a fraud prediction with confidence score.
            </p>
            
            <form onSubmit={handleSubmit} className="demo-form">
                {/* Model Selection */}
                <div className="form-group">
                    <label htmlFor="model">Select Model</label>
                    <select id="model" value={selectedModel} onChange={handleModelChange} className="model-select">
                        <option value="voting">🗳️ Voting Classifier (Best)</option>
                        <option value="randomForest">🌲 Random Forest</option>
                        <option value="logistic">📈 Logistic Regression</option>
                        <option value="svm">⚡ Support Vector Machine</option>
                        <option value="knn">📍 K-Nearest Neighbors</option>
                        <option value="decisionTree">🌳 Decision Tree</option>
                    </select>
                </div>

                {/* Basic Transaction Info */}
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="time">Time (seconds)</label>
                        <input type="number" id="time" name="time" value={formData.time} onChange={handleChange} placeholder="e.g., 94814" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount">Amount ($)</label>
                        <input type="number" step="0.01" id="amount" name="amount" value={formData.amount} onChange={handleChange} placeholder="e.g., 88.35" required />
                    </div>
                </div>

                {/* Top Important Features */}
                <div className="form-section">
                    <h4>🔍 Key Transaction Features (Most Important for Fraud Detection)</h4>
                    <p className="feature-description">
                        These are the most important features derived from PCA analysis of transaction data. 
                        They represent patterns in transaction behavior, merchant information, and spending habits.
                    </p>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="v17">Transaction Pattern V17 <span className="importance-badge">#1 Most Important</span></label>
                            <input type="number" step="any" id="v17" name="v17" value={formData.v17} onChange={handleChange} placeholder="e.g., -0.326" required />
                            <small className="feature-hint">Represents spending pattern and transaction frequency</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="v14">Merchant Category V14 <span className="importance-badge">#2 Most Important</span></label>
                            <input type="number" step="any" id="v14" name="v14" value={formData.v14} onChange={handleChange} placeholder="e.g., -0.302" required />
                            <small className="feature-hint">Indicates merchant type and business category</small>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="v12">Geographic Location V12 <span className="importance-badge">#3 Most Important</span></label>
                            <input type="number" step="any" id="v12" name="v12" value={formData.v12} onChange={handleChange} placeholder="e.g., -0.260" required />
                            <small className="feature-hint">Shows transaction location and geographic patterns</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="v10">Time Pattern V10 <span className="importance-badge">Important</span></label>
                            <input type="number" step="any" id="v10" name="v10" value={formData.v10} onChange={handleChange} placeholder="e.g., -0.216" required />
                            <small className="feature-hint">Reflects timing patterns and transaction intervals</small>
                        </div>
                    </div>
                </div>

                {/* Additional Features */}
                <div className="form-section">
                    <h4>📊 Additional Transaction Features</h4>
                    <p className="feature-description">
                        Additional features that help improve fraud detection accuracy. These capture 
                        subtle patterns in transaction behavior and customer spending habits.
                    </p>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="v1">Payment Method V1</label>
                            <input type="number" step="any" id="v1" name="v1" value={formData.v1} onChange={handleChange} placeholder="e.g., -1.359" />
                            <small className="feature-hint">Payment method characteristics and security features</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="v2">Transaction Channel V2</label>
                            <input type="number" step="any" id="v2" name="v2" value={formData.v2} onChange={handleChange} placeholder="e.g., -0.072" />
                            <small className="feature-hint">Online, POS, ATM, or other transaction channels</small>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="v3">Customer Behavior V3</label>
                            <input type="number" step="any" id="v3" name="v3" value={formData.v3} onChange={handleChange} placeholder="e.g., 1.179" />
                            <small className="feature-hint">Historical spending patterns and customer profile</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="v4">Risk Score V4</label>
                            <input type="number" step="any" id="v4" name="v4" value={formData.v4} onChange={handleChange} placeholder="e.g., 0.133" />
                            <small className="feature-hint">Risk assessment and fraud probability indicators</small>
                        </div>
                    </div>
                </div>

                <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? '🔄 Predicting...' : '🔍 Check Transaction'}
                </button>
            </form>

            {/* Display result */}
            {result && (
                <div className={`prediction-result ${result.prediction}`}>
                    <div className="result-header">
                        <h3>
                            {result.prediction === 'safe' 
                                ? '✅ Valid Transaction' 
                                : '🚨 FRAUD DETECTED!'}
                        </h3>
                    </div>
                    <div className="result-details">
                        <p><strong>Model Used:</strong> {result.model.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</p>
                        <p><strong>Confidence:</strong> {(result.confidence * 100).toFixed(1)}%</p>
                        <p><strong>Recommendation:</strong> {
                            result.prediction === 'safe' 
                                ? 'Transaction appears legitimate and can be processed.' 
                                : 'Please review this transaction manually before processing.'
                        }</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Demo;